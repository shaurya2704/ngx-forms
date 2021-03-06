import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, ValidationErrors } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { By } from '@angular/platform-browser';
import { FieldConfig, FieldDictionary, FIELD_DICT_TOKEN, Field } from '../common/types';

@Component({
    selector: 'form-input',
    template: '<div [formGroup]="group"><input [formControlName]="field.name"></div>'
})
export class FormInputComponent implements Field {
    field: FieldConfig;
    group: FormGroup;
}

const defaultInputs: FieldDictionary = {
    text: FormInputComponent,
};

@Component({
    template: `<form [formGroup]="form"><div dynamicField [field]="field" [group]="form"></div></form>`
})
class TestComponent {
    field: FieldConfig;
    form: FormGroup;
}

@NgModule({
    declarations: [FormInputComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    entryComponents: [FormInputComponent]
})
class TestModule { }

describe('DynamicFieldDirective', () => {
    let component: TestComponent;
    let componentError: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let fixtureError: ComponentFixture<TestComponent>;
    let directiveEl;

    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldDirective, TestComponent],
            imports: [FormsModule, ReactiveFormsModule, TestModule],
            providers: [{ provide: FIELD_DICT_TOKEN, useValue: defaultInputs }]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        component.field = { type: 'text', label: 'Title', name: 'publicationTitle', placeholder: 'Please enter', required: true };
        component.form = formBuilder.group({
            publicationTitle: new FormControl('test')
        });


        fixture.detectChanges();
    });

    it('loads directive and form-input component', () => {
        directiveEl = fixture.debugElement.query(By.directive(DynamicFieldDirective));
        expect(directiveEl).not.toBeNull();
    });

    it('throws error when put incorrect type', () => {
        fixtureError = TestBed.createComponent(TestComponent);
        componentError = fixtureError.componentInstance;
        componentError.field = { type: 'text2', label: 'Title', name: 'publicationTitle', placeholder: 'Please enter', required: true };
        componentError.form = formBuilder.group({
            publicationTitle: new FormControl('test')
        });

        expect(() => {
            fixtureError.detectChanges();
        }).toThrowError();

    });

    describe('createControl()', () => {
        let dir: DynamicFieldDirective;

        beforeEach(() => {
            TestBed.compileComponents();
            directiveEl = fixture.debugElement.query(By.directive(DynamicFieldDirective));
            dir = directiveEl.injector.get(DynamicFieldDirective);
        });

        const cfg = { name: 'test', type: 'text', disabled: true, required: true, minLength: 5, maxLength: 10, email: true, min: 1, max: 10, pattern: new RegExp('\d'), nullValidator: true, value: 5 };

        it('should test', () => {
            dir.model = { publicationTitle: '123'};
            dir.ngOnInit();
            expect(dir.group.value.publicationTitle).toEqual('123');
        });

        it('shoulld test constructor', () => {
            DynamicFieldDirective.constructor();
            expect(dir).toBeTruthy();
        });

        it('should throw error', () => {
            expect(() => {
                dir.group = undefined;
                dir.ngOnInit();
                fixtureError.detectChanges();
            }).toThrowError('group is not set');
        });

        it('should set pattern validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', pattern: new RegExp('\d'), value: 5 });
            const vals = control.validator(control);
            expect(vals.pattern).toBeTruthy();
        });

        it('should set email validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', email: true, value: 5 });
            const vals = control.validator(control);
            expect(vals.email).toBeTruthy();
        });

        it('should set min length validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', minLength: 5, maxLength: 10, value: 'test' });
            const vals = control.validator(control);
            expect(vals.minlength).toBeTruthy();
        });

        it('should set max length validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', maxLength: 2, value: 'test' });
            const vals = control.validator(control);
            expect(vals.maxlength).toBeTruthy();
        });

        it('should set required validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', required: true, value: '' });
            const vals = control.validator(control);
            expect(vals.required).toBeTruthy();
        });

        it('should set min value validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', min: 2, value: 1 });
            const vals = control.validator(control);
            expect(vals.min).toBeTruthy();
        });

        it('should set max value validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', max: 2, value: 22 });
            const vals = control.validator(control);
            expect(vals.max).toBeTruthy();
        });

        it('should set max value validator', () => {
            const control = dir.createControl({ name: 'test', type: 'text', max: 2, requiredTrue: true });
            const vals: ValidationErrors = control.validator(control);
            expect(vals.required).toBeTruthy();
        });

        it('should set value', () => {
            const control = dir.createControl(cfg);
            expect(control.value).toEqual(cfg.value);
        });


    });
});

describe('TestNoGroup', () => {
    @Component({ template: `<div dynamicField [field]="field"></div>` }) class TestNoGroup { }
    let fixtureError: ComponentFixture<TestNoGroup>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldDirective, TestNoGroup],
            imports: [FormsModule, ReactiveFormsModule, TestModule],
            providers: [{ provide: FIELD_DICT_TOKEN, useValue: defaultInputs }]
        });
        TestBed.createComponent(TestNoGroup);
    });

    it('should throw error', () => {
        expect(() => { fixtureError.detectChanges(); }).toThrowError();
    });
});

describe('TestNoInput', () => {
    @Component({ template: `<div dynamicField [group]="form"></div>` }) class TestNoInput { form: any; }
    let fixtureError: ComponentFixture<TestNoInput>;
    let component: TestNoInput;
    let fixture: ComponentFixture<TestNoInput>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldDirective, TestNoInput],
            imports: [FormsModule, ReactiveFormsModule, TestModule],
            providers: [{ provide: FIELD_DICT_TOKEN, useValue: defaultInputs }]
        });

        fixture = TestBed.createComponent(TestNoInput);
        component = fixture.componentInstance;
        component.form = new FormGroup({
            publicationTitle: new FormControl('test')
        });
    });

    it('should throw error', () => {
        expect(() => { fixtureError.detectChanges(); }).toThrowError('Cannot read property \'detectChanges\' of undefined');
    });

});
