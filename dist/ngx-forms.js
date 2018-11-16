!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}([function(e,t){e.exports=require("@angular/core")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(6),a=function(){function e(){this.components={},this.types={}}return e.prototype.addField=function(e,t,o){if(void 0===o&&(o=i.FormComponentType.Field),!e||!e.length)throw new Error("Failed to add new component. Type is incorrent, Type value: "+e);if(!t)throw new Error("Failed to add new component. Component is undefined");this.components[e]=t,this.types[e]=o},e.prototype.getField=function(e){if(!this.components[e]){var t=Object.keys(this.components).join(", ");throw new Error('Trying to use an unsupported field type "'+e+'". Supported types: '+t)}return this.components[e]},e.prototype.getType=function(e){return this.types[e]},e=n([r.Injectable()],e)}();t.DynamicFieldService=a},function(e,t){e.exports=require("@angular/forms")},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,c=0,l=[],s=o(28);function f(e,t){for(var o=0;o<e.length;o++){var r=e[o],i=n[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(y(r.parts[a],t));n[r.id]={id:r.id,refs:1,parts:c}}}}function d(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]})}return o}function u(e,t){var o=i(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),l.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,o);o.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),u(e,t),t}function v(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function y(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var l=c++;o=a||(a=m(t)),n=b.bind(null,o,l,!1),r=b.bind(null,o,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),u(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=s(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,o,t),r=function(){p(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){p(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=d(e,t);return f(o,t),function(e){for(var r=[],i=0;i<o.length;i++){var a=o[i];(c=n[a.id]).refs--,r.push(c)}e&&f(d(e,t),t);for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete n[c.id]}}}};var h=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function b(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.set=function(e){this.dataProvider=e},e.prototype.get=function(e){if(!this.dataProvider[e])throw new Error('Data Provider with name "'+e+'" was not found');return this.dataProvider[e]},e=n([r.Injectable()],e)}();t.DataService=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Field=0]="Field",e[e.Group=1]="Group",e[e.Array=2]="Array"}(t.FormComponentType||(t.FormComponentType={}))},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(8),c=o(9),l=o(10),s=o(11),f=o(12),d=o(13),u=o(14),p=o(15),m=o(1),v=function(){function e(e){this.dynamicFieldService=e,this.dynamicFieldService.addField("text",a.FormInputComponent),this.dynamicFieldService.addField("select",c.FormSelectComponent),this.dynamicFieldService.addField("editor",l.FormTextEditorComponent),this.dynamicFieldService.addField("textarea",d.FormTextareaComponent),this.dynamicFieldService.addField("hidden",u.FormInputHidden),this.dynamicFieldService.addField("user",p.FormUserComponent),this.dynamicFieldService.addField("radio",f.FormRadioComponent),this.dynamicFieldService.addField("checkbox",s.FormCheckboxComponent)}var t;return e=n([i.Injectable(),r("design:paramtypes",["function"==typeof(t=void 0!==m.DynamicFieldService&&m.DynamicFieldService)&&t||Object])],e)}();t.PreloadService=v},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-input",template:o(23)})],e)}();t.FormInputComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-select",template:o(24)})],e)}();t.FormSelectComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){this.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]}}return e=n([r.Component({selector:"form-text-editor",template:o(25),styles:[o(26).toString()]})],e)}();t.FormTextEditorComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-checkbox",template:o(29)})],e)}();t.FormCheckboxComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-radio",template:o(30)})],e)}();t.FormRadioComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-textarea",template:o(31)})],e)}();t.FormTextareaComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-hidden",template:o(32)})],e)}();t.FormInputHidden=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(33);o(34);var c=o(5),l=function(){function e(e){var t=this;this.dataService=e,this.emitModelChange=new i.EventEmitter,this.requestAutocompleteItems=function(e){var o=t.provider[t.field.providerMethod](e);return a.Observable.fromPromise(o)}}var t;return e.prototype.ngOnInit=function(){var e=this;this.group.controls[this.field.name].value&&this.group.controls[this.field.name].value.forEach(function(t){t.display||(t.display=t[e.field.settings.displayBy],t.value=t[e.field.settings.identifyBy])}),this.provider=this.dataService.get(this.field.provider)},e.prototype.change=function(e){this.emitModelChange.emit(this.emitModel)},n([i.Input(),r("design:type",Boolean)],e.prototype,"typeaheadOnly",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"emitModel",void 0),n([i.Input(),r("design:type",Number)],e.prototype,"maxItems",void 0),n([i.Output(),r("design:type",Object)],e.prototype,"emitModelChange",void 0),e=n([i.Component({selector:"form-user",template:o(35)}),r("design:paramtypes",["function"==typeof(t=void 0!==c.DataService&&c.DataService)&&t||Object])],e)}();t.FormUserComponent=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(17),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(18))},function(e,t){e.exports=require("reflect-metadata")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(19),a=o(2),c=o(20),l=o(21),s=o(36),f=o(40),d=o(45),u=o(46),p=o(5);t.DataService=p.DataService;var m=o(1);t.DynamicFieldService=m.DynamicFieldService;var v=o(7),y=o(47);t.Events=y.Events;var h=function(){function e(){}return e=n([r.NgModule({imports:[i.CommonModule,u.BrowserAnimationsModule,a.ReactiveFormsModule,a.FormsModule,c.QuillModule,d.TagInputModule],declarations:[s.Components,l.DynamicFieldDirective,s.DynamicFormComponent,f.DynamicPanelComponent],exports:[s.DynamicFormComponent],entryComponents:[s.Components],providers:[p.DataService,m.DynamicFieldService,v.PreloadService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=h},function(e,t){e.exports=require("@angular/common")},function(e,t){e.exports=require("ngx-quill")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(2),c=o(22),l=o(1),s=o(7),f=function(){function e(e,t,o,n){this.resolver=e,this.container=t,this.dynamicFieldService=o,this.preloadService=n}var t,o,f,d,u,p;return e.prototype.ngOnChanges=function(){this.component&&(this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model)},e.prototype.ngOnInit=function(){var e=this.dynamicFieldService.getField(this.field.type),t=this.resolver.resolveComponentFactory(e);this.component=this.container.createComponent(t),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model},n([i.Input(),r("design:type","function"==typeof(t=void 0!==c.IFieldConfig&&c.IFieldConfig)&&t||Object)],e.prototype,"field",void 0),n([i.Input(),r("design:type","function"==typeof(o=void 0!==a.FormGroup&&a.FormGroup)&&o||Object)],e.prototype,"group",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=n([i.Directive({selector:"[dynamicField]"}),r("design:paramtypes",["function"==typeof(f=void 0!==i.ComponentFactoryResolver&&i.ComponentFactoryResolver)&&f||Object,"function"==typeof(d=void 0!==i.ViewContainerRef&&i.ViewContainerRef)&&d||Object,"function"==typeof(u=void 0!==l.DynamicFieldService&&l.DynamicFieldService)&&u||Object,"function"==typeof(p=void 0!==s.PreloadService&&s.PreloadService)&&p||Object])],e)}();t.DynamicFieldDirective=f},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <select [formControlName]="field.name" class="form-control">\n            <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n        </select>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group" required>{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10 editor-container">\n        <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n    </div>\n</div>\n'},function(e,t,o){var n=o(27);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,"form-text-editor .editor-container {\n  margin-bottom: 40px; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n        <div class="row" *ngFor="let item of field.options">\n            <label class="col-md-6"><input type="checkbox" [formControlName]="field.name">{{item}}</label>\n        </div>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n      <label  *ngFor="let item of field.options">\n        <input type="radio"  [value]="item" [formControlName]="field.name">{{item}}\n      </label>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder" [formControlName]="field.name"></textarea>\n    </div>\n</div>\n'},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" class="form-control" [formControlName]="field.name">\n</ng-container>\n'},function(e,t){e.exports=require("rxjs/Observable")},function(e,t){e.exports=require("rxjs/add/observable/fromPromise")},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <tag-input [theme]="\'bootstrap\'" [formControlName]="field.name" name="items" [onlyFromAutocomplete]="true">\n            <tag-input-dropdown [autocompleteObservable]=\'requestAutocompleteItems\' [identifyBy]="field.settings.identifyBy" [displayBy]="field.settings.displayBy"\n                [focusFirstElement]="true">\n                <ng-template let-item="item" let-index="index">\n                    {{ item[field.settings.displayBy] }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(2),c=o(5),l=o(8),s=o(9),f=o(10),d=o(11),u=o(12),p=o(13),m=o(14),v=o(15),y=o(6),h=o(1),b=function(){function e(e,t,o){this.fb=e,this.dataService=t,this.dynamicFieldService=o,this.fieldsConfig=[]}var t,l,s;return Object.defineProperty(e.prototype,"controls",{get:function(){return this.fieldsConfig.filter(function(e){return"button"!==e.type})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.dataService.set(this.dataProvider),this.form=this.createForm(),this.model&&this.form.patchValue(this.model),this.fieldsConfig.forEach(function(t){t.lookup&&e.lookups.hasOwnProperty(t.lookup)&&(t.options=e.lookups[t.lookup],t.extract&&(t.options=t.options.map(function(e){return e[t.extract]})))})},e.prototype.ngOnChanges=function(){var e=this;if(this.form){var t=Object.keys(this.form.controls),o=this.controls.map(function(e){return e.name});t.filter(function(e){return!o.includes(e)}).forEach(function(t){return e.form.removeControl(t)}),o.filter(function(e){return!t.includes(e)}).forEach(function(t){var o=e.fieldsConfig.find(function(e){return e.name===t});e.form.addControl(t,e.createControl(o))})}},e.prototype.createForm=function(){var e=this,t=this.fb.group({});return this.controls.forEach(function(o){switch(e.dynamicFieldService.getType(o.type)){case y.FormComponentType.Array:t.addControl(o.name,new a.FormArray([]));break;case y.FormComponentType.Group:t.addControl(o.name,new a.FormGroup({}));break;default:t.addControl(o.name,e.createControl(o))}}),t},e.prototype.createControl=function(e){var t=e.disabled,o=e.required,n=e.minLength,r=e.maxLength,i=e.email,c=e.min,l=e.max,s=e.pattern,f=e.nullValidator,d=e.value,u=[];return void 0!=o&&o&&u.push(a.Validators.required),void 0!=n&&u.push(a.Validators.minLength(n)),void 0!=r&&u.push(a.Validators.maxLength(r)),void 0!=i&&u.push(a.Validators.email),void 0!=c&&u.push(a.Validators.min(c)),void 0!=l&&u.push(a.Validators.max(l)),void 0!=s&&u.push(a.Validators.pattern(s)),void 0!=f&&u.push(a.Validators.nullValidator),this.fb.control({disabled:t,value:d},u)},e.prototype.setDisabled=function(e,t){if(this.form.controls[e]){var o=t?"disable":"enable";this.form.controls[e][o]()}else this.fieldsConfig=this.fieldsConfig.map(function(o){return o.name===e&&(o.disabled=t),o})},e.prototype.setValue=function(e,t){this.form.controls[e].setValue(t,{emitEvent:!0})},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n([i.Input(),r("design:type",Array)],e.prototype,"fieldsConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"dataProvider",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"formsConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),e=n([i.Component({exportAs:"dynamicForm",selector:"dynamic-form",template:o(37),styles:[o(38).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==a.FormBuilder&&a.FormBuilder)&&t||Object,"function"==typeof(l=void 0!==c.DataService&&c.DataService)&&l||Object,"function"==typeof(s=void 0!==h.DynamicFieldService&&h.DynamicFieldService)&&s||Object])],e)}();t.DynamicFormComponent=b,t.Components=[l.FormInputComponent,s.FormSelectComponent,f.FormTextEditorComponent,p.FormTextareaComponent,m.FormInputHidden,v.FormUserComponent,u.FormRadioComponent,d.FormCheckboxComponent]},function(e,t){e.exports='<form class="dynamic-form" [formGroup]="form">\n  <ng-container *ngFor="let group of formsConfig;">\n    <div>\n      <dynamic-panel *ngFor="let panelConfig of group.panels" [panelConfig]="panelConfig" [fieldsConfig]="fieldsConfig"\n        [group]="form" [model]="model"></dynamic-panel>\n    </div>\n  </ng-container>\n</form>'},function(e,t,o){var n=o(39);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".required-icon {\n  color: red; }\n",""])},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(41),c=function(){function e(){}return e.prototype.getFieldConfig=function(e){var t=a.find(this.fieldsConfig,{name:e});if(t)return t;throw new Error("Can't find field name: "+e+", please check config file!")},n([i.Input(),r("design:type",Object)],e.prototype,"panelConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"group",void 0),n([i.Input(),r("design:type",Array)],e.prototype,"fieldsConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=n([i.Component({selector:"dynamic-panel",template:o(42),styles:[o(43).toString()]})],e)}();t.DynamicPanelComponent=c},function(e,t){e.exports=require("lodash")},function(e,t){e.exports='<div class="form-group row" [formGroup]="group">\n    <div class="col-md-10">\n        <div class="panel panel-default">\n            <div class="panel-heading">{{panelConfig.label}}</div>\n            <div class="panel-body">\n                <div *ngFor="let field of panelConfig.fields" dynamicField [field]="getFieldConfig(field)" [group]="group" [model]="model"></div>\n            </div>\n        </div>\n    </div>\n</div>\n'},function(e,t,o){var n=o(44);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,"dynamic-panel .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  dynamic-panel .panel .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ddd;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  dynamic-panel .panel .panel-body {\n    padding: 15px; }\n",""])},function(e,t){e.exports=require("ngx-chips")},function(e,t){e.exports=require("@angular/platform-browser/animations")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.SELECT_FORM_TAB="selectFormTab",e}();t.Events=n}])});