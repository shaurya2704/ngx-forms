import { Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Directive, Inject, AfterViewInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig, LayoutDictionary, LAYOUTS_TOKEN, Layout, DEFAULT_LAYOUT } from '../common/types';

@Directive({
    exportAs: 'dynamicForm',
    selector: 'dynamic-form'
})
export class DynamicFormDirective implements OnInit, AfterViewInit, OnChanges {
    @Input() formConfig: FormConfig;
    @Input() model: any;
    @Input() readOnly: boolean;

    public group: FormGroup;
    get changes() { return this.group.valueChanges; }
    get valid() { return this.group.valid; }
    get value() { return this.group.value; }
    get rawValue() { return this.group.getRawValue(); }

    private comp;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private container: ViewContainerRef,
        @Inject(LAYOUTS_TOKEN) private layouts: LayoutDictionary) {
        this.group = new FormGroup({});
    }

    public ngOnInit(): void {
        if (this.container.length) { return; }
        if (!this.formConfig.layout) { this.formConfig.layout = DEFAULT_LAYOUT; }
        if (!this.layouts[this.formConfig.layout]) { throw new Error(`Layout with name "${this.formConfig.layout}" was not found`); }

        const componentReference = this.layouts[this.formConfig.layout];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<Layout>(componentReference);
        const component = this.container.createComponent(componentFactory);
        component.instance.group = this.group;
        component.instance.formConfig = this.formConfig;
        component.instance.model = this.model;
        this.comp = component;
    }

    ngAfterViewInit() {
        if (this.readOnly) {
            this.group.disable();
        }
    }

    removeComponent() {
        if (this.comp) {
            this.container.remove(this.container.indexOf(this.comp));
            this.comp = undefined;
        }
    }

    ngOnChanges() {
        this.removeComponent();
        this.ngOnInit();
    }

}
