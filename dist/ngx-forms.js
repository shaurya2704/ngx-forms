!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t){e.exports=require("@angular/core")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(){}}();t.BaseFieldComponent=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0);t.FIELD_DICT_TOKEN=new n.InjectionToken("fields"),t.LAYOUTS_TOKEN=new n.InjectionToken("layouts"),function(e){e.And="and",e.Or="or"}(t.ConditionType||(t.ConditionType={}))},function(e,t){e.exports=require("@angular/forms")},function(e,t){e.exports=require("@angular/common")},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}var c;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];null!=c[0]&&n[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),t.push(c))}},t}},function(e,t,o){var n,r,i={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,l=0,u=[],f=o(23);function p(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=i[n.id];if(r){r.refs++;for(var c=0;c<r.parts.length;c++)r.parts[c](n.parts[c]);for(;c<n.parts.length;c++)r.parts.push(g(n.parts[c],t))}else{var a=[];for(c=0;c<n.parts.length;c++)a.push(g(n.parts[c],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function d(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):o.push(n[c]={id:c,parts:[a]})}return o}function y(e,t){var o=a(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),u.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,o);o.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),y(e,t),t}function v(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function g(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=l++;o=s||(s=h(t)),n=O.bind(null,o,c,!1),r=O.bind(null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),y(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=f(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,o,t),r=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=h(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){m(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=d(e,t);return p(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var c=o[r];(a=i[c.id]).refs--,n.push(a)}e&&p(d(e,t),t);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var b,_=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function O(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(3),a=o(2),s=function(){function e(){}var t,o;return n([i.Input(),r("design:type","function"==typeof(t=void 0!==a.FormConfig&&a.FormConfig)?t:Object)],e.prototype,"formConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),n([i.Input(),r("design:type","function"==typeof(o=void 0!==c.FormGroup&&c.FormGroup)?o:Object)],e.prototype,"group",void 0),e}();t.BaseLayout=s},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(41),c=o(4),a=function(){function e(){}return e=n([r.NgModule({imports:[c.CommonModule],declarations:[i.DynamicFieldDirective],exports:[i.DynamicFieldDirective],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.DynamicFieldModule=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(10),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(11))},function(e,t){e.exports=require("reflect-metadata")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(4),c=o(3),a=o(12),s=o(13),l=o(2),u=o(14),f=o(36),p=o(8),d=o(44),y=o(45),m=function(){function e(){}var t;return t=e,e.forRoot=function(e){var o=e.fieldDictionary,n=e.layoutDictionary;return o&&Object.keys(o).forEach(function(e){return u.Fields[e]=o[e]}),n&&Object.keys(n).forEach(function(e){return f.defaultLayouts[e]=n[e]}),{ngModule:t,providers:[{provide:l.FIELD_DICT_TOKEN,useValue:u.Fields},{provide:l.LAYOUTS_TOKEN,useValue:f.defaultLayouts}]}},e=t=n([r.NgModule({imports:[i.CommonModule,s.BrowserAnimationsModule,c.ReactiveFormsModule,c.FormsModule,f.FormLayoutsModule,p.DynamicFieldModule,d.QuillModule,y.NgbModule],declarations:[a.DynamicFormDirective,u.FieldComponents],entryComponents:[u.FieldComponents],exports:[a.DynamicFormDirective],providers:[{provide:l.FIELD_DICT_TOKEN,useValue:u.Fields},{provide:l.LAYOUTS_TOKEN,useValue:f.defaultLayouts}],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=m},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=o(3),s=o(2),l=function(){function e(e,t,o){this.componentFactoryResolver=e,this.container=t,this.layouts=o,this.group=new a.FormGroup({})}var t,o,l,u;return Object.defineProperty(e.prototype,"changes",{get:function(){return this.group.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.group.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.group.value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.group.getRawValue()},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){if(!this.layouts[this.formConfig.layout])throw new Error('Layout with name "'+this.formConfig.layout+'" was not found');var e=this.layouts[this.formConfig.layout],t=this.componentFactoryResolver.resolveComponentFactory(e),o=this.container.createComponent(t);o.instance.group=this.group,o.instance.formConfig=this.formConfig,o.instance.model=this.model,o.instance.lookups=this.lookups},n([c.Input(),r("design:type","function"==typeof(t=void 0!==s.FormConfig&&s.FormConfig)?t:Object)],e.prototype,"formConfig",void 0),n([c.Input(),r("design:type",Object)],e.prototype,"model",void 0),n([c.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),e=n([c.Directive({exportAs:"dynamicForm",selector:"dynamic-form"}),i(2,c.Inject(s.LAYOUTS_TOKEN)),r("design:paramtypes",["function"==typeof(o=void 0!==c.ComponentFactoryResolver&&c.ComponentFactoryResolver)?o:Object,"function"==typeof(l=void 0!==c.ViewContainerRef&&c.ViewContainerRef)?l:Object,"function"==typeof(u=void 0!==s.LayoutDictionary&&s.LayoutDictionary)?u:Object])],e)}();t.DynamicFormDirective=l},function(e,t){e.exports=require("@angular/platform-browser/animations")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(15),r=o(17),i=o(19),c=o(24),a=o(26),s=o(28),l=o(30),u=o(32),f=o(34);t.Fields={text:n.FormInputComponent,select:r.FormSelectComponent,editor:i.FormTextEditorComponent,textarea:s.FormTextareaComponent,hidden:l.FormInputHiddenComponent,radio:a.FormRadioComponent,checkbox:c.FormCheckboxComponent,label:u.FormLabelComponent,date:f.FormDateComponent},t.FieldComponents=[n.FormInputComponent,r.FormSelectComponent,i.FormTextEditorComponent,s.FormTextareaComponent,l.FormInputHiddenComponent,a.FormRadioComponent,c.FormCheckboxComponent,u.FormLabelComponent,f.FormDateComponent]},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-input",template:o(16)})],t)}(o(1).BaseFieldComponent);t.FormInputComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n</ng-container>'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-select",template:o(18)})],t)}(o(1).BaseFieldComponent);t.FormSelectComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <select [formControlName]="field.name" class="form-control">\n        <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n    </select>\n</ng-container>'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]},t}return r(t,e),t=i([c.Component({selector:"form-text-editor",template:o(20),styles:[o(21).toString()]})],t)}(o(1).BaseFieldComponent);t.FormTextEditorComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n</ng-container>'},function(e,t,o){var n=o(22);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(6)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(5)(!1)).push([e.i,"form-text-editor .ql-container.ql-disabled {\n  background-color: #e9ecef; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-checkbox",template:o(25)})],t)}(o(1).BaseFieldComponent);t.FormCheckboxComponent=a},function(e,t){e.exports='<div class="form-check" [formGroup]="group">\n    <input type="checkbox" class="form-check-input" [formControlName]="field.name">\n</div>'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-radio",template:o(27)})],t)}(o(1).BaseFieldComponent);t.FormRadioComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <label *ngFor="let item of field.options">\n        <input type="radio" [value]="item" [formControlName]="field.name">{{item}}\n    </label>\n</ng-container>'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-textarea",template:o(29)})],t)}(o(1).BaseFieldComponent);t.FormTextareaComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder"\n        [formControlName]="field.name"></textarea>\n</ng-container>'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-hidden",template:o(31)})],t)}(o(1).BaseFieldComponent);t.FormInputHiddenComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" [formControlName]="field.name">\n</ng-container>\n'},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-label",template:o(33)})],t)}(o(1).BaseFieldComponent);t.FormLabelComponent=a},function(e,t){e.exports="<span>{{group.value[this.field.name]}}</span>"},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"form-date",template:o(35)})],t)}(o(1).BaseFieldComponent);t.FormDateComponent=a},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <ngb-datepicker [formControlName]="field.name"></ngb-datepicker>\n</ng-container>'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(4),c=o(37),a=o(8),s=o(42);t.defaultLayouts={groups:c.GroupComponent,basic:s.BasicLayoutComponent};var l=function(){function e(){}return e=n([r.NgModule({imports:[i.CommonModule,a.DynamicFieldModule],declarations:[c.GroupComponent,s.BasicLayoutComponent],entryComponents:[c.GroupComponent,s.BasicLayoutComponent],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.FormLayoutsModule=l},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=o(2),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref={groups:[]},t.subscriptions=[],t.groupProps=[],t.selected=0,t.fconfig=[],t}return r(t,e),t.prototype.ngOnInit=function(){var e=this;this.fconfig=JSON.parse(JSON.stringify(this.formConfig.form)),this.fconfig.forEach(function(t,o){var n=[];t.fields&&(n=n.concat(t.fields)),t.panels&&t.panels.forEach(function(e){e.fields&&(n=n.concat(e.fields))}),e.groupProps.push({hidden:o>0,valid:!0,controls:[],fields:n}),t.enableWhen&&(e.checkRules(t,e.model,n)||n.forEach(function(e){return e.disabled=!0})),n.forEach(function(t){if(t.lookup&&e.lookups){var o="string"==typeof t.lookup?{name:t.lookup,extract:null}:t.lookup;t.options=o.extract?e.lookups[o.name].map(function(e){return e[o.extract]}):e.lookups[o.name]}else;})})},t.prototype.checkRules=function(e,t,o){var n=!0;if(e.enableWhen){var r=e.enableWhen;if(!r.rules.length)return!0;var i=function(e){var n,r=t[e.field]||(n=o.find(function(t){return t.name===e.field}))&&n.value||"";return Array.isArray(e.equals)||(e.equals=[e.equals]),e.equals.indexOf(r)>-1};return r.type!==a.ConditionType.Or&&r.type||(n=r.rules.some(i)),r.type===a.ConditionType.And&&(n=r.rules.every(i)),n}},t.prototype.ngAfterViewInit=function(){var e=this;this.fconfig.forEach(function(t,o){var n=e.groupProps[o].fields;e.groupProps[o].controls=n.filter(function(e){return e.required}).map(function(t){return e.group.get(t.name)}),e.groupProps[o].controls.forEach(function(t){e.subscriptions.push(t.statusChanges.subscribe(function(){e.groupProps[o].valid=e.groupProps[o].controls.every(function(e){return e.valid})}))})})},t.prototype.select=function(e){this.groupProps[this.selected].hidden=!0,this.groupProps[e].hidden=!1,this.selected=e},t.prototype.prev=function(){this.select(this.selected-1)},t.prototype.next=function(){this.select(this.selected+1)},t.prototype.disablePrev=function(){return this.selected<1},t.prototype.disableNext=function(){return this.selected>this.groupProps.length-2},t.prototype.ngOnDestroy=function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})},t=i([c.Component({selector:"layout-group-group",template:o(38),styles:[o(39).toString()]})],t)}(o(7).BaseLayout);t.GroupComponent=s},function(e,t){e.exports='<div class="row">\n\n    <div class="col-2">\n        <ul class="list-group mb-3">\n            <ng-container *ngFor="let item of fconfig; let i = index">\n                <a class="list-group-item" [class.active]=\'i === selected\' (click)="select(i)">\n                    <i class="fa fa-check-circle-o fa-2x"\n                        [ngClass]=" groupProps[i].valid ? \'text-success\' : \'text-secondary\'"></i>\n                    {{item.label}}</a>\n            </ng-container>\n        </ul>\n        <div class="card">\n            <div class="card-body">\n                <div class="col-lg-12" ng-hide="!tab">\n                    <button type="button" class="btn btn-primary ml-1" [disabled]="disablePrev()" (click)="prev()"\n                        title="Previous">Previous</button>\n                    <button type="button" class="btn btn-primary ml-1" [disabled]="disableNext()" (click)="next()"\n                        title="Next">Next</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-10" [formGroup]="group">\n        <div *ngFor="let panel of fconfig; let i = index;">\n            <ng-container *ngIf="panel.fields">\n                <ng-container [ngTemplateOutlet]="panelTpl"\n                    [ngTemplateOutletContext]="{ group: group, panelConfig: panel, model: model, hidden: groupProps[i].hidden }">\n                </ng-container>\n            </ng-container>\n\n            <ng-container *ngIf="panel.panels">\n                <ng-container *ngFor="let panelConfig of panel.panels" [ngTemplateOutlet]="panelTpl"\n                    [ngTemplateOutletContext]="{ group: group, panelConfig: panelConfig, model: model, hidden: groupProps[i].hidden }">\n                </ng-container>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #panelTpl let-group="group" let-panelConfig="panelConfig" let-model="model" let-hidden="hidden">\n    <div class="card mb-3" [formGroup]="group" [hidden]="hidden">\n        <div class="card-header" *ngIf="panelConfig.label">\n            {{panelConfig.label}}\n        </div>\n        <div class="card-body">\n            <div class="row mb-2" *ngFor="let field of panelConfig.fields">\n\n                <ng-container *ngIf="field.label">\n                    <label class="col-2 font-weight-bold col-form-label">{{field.label}}\n                        <span class="required-icon" [hidden]="!field.required">*</span>\n                    </label>\n                    <div class="col-10">\n                        <div dynamicField [field]="field" [group]="group" [model]="model"></div>\n                    </div>\n                </ng-container>\n\n                <ng-container *ngIf="!field.label">\n                    <div class="col-12">\n                        <div dynamicField [field]="field" [group]="group" [model]="model"></div>\n                    </div>\n                </ng-container>\n\n            </div>\n        </div>\n    </div>\n</ng-template>'},function(e,t,o){var n=o(40);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(6)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(5)(!1)).push([e.i,".required-icon {\n  color: red; }\n",""])},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=o(3),s=o(2),l=function(){function e(e,t,o,n){this.resolver=e,this.container=t,this.fb=o,this.inputs=n}var t,o,l,u,f,p;return e.prototype.ngOnInit=function(){if(!this.group)throw new Error("group is not set");if(!this.inputs[this.field.type])throw new Error('Input with type "'+this.field.type+'" was not found');var e=this.inputs[this.field.type],t=this.resolver.resolveComponentFactory(e);this.component=this.container.createComponent(t),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model,this.group.addControl(this.field.name,this.createControl(this.field)),this.model&&this.model[this.field.name]&&this.group.get(this.field.name).patchValue(this.model[this.field.name])},e.prototype.createControl=function(e){var t=e.disabled,o=e.required,n=e.minLength,r=e.maxLength,i=e.email,c=e.min,s=e.max,l=e.pattern,u=e.value,f=[];return void 0!==o&&o&&f.push(a.Validators.required),void 0!==n&&f.push(a.Validators.minLength(n)),void 0!==r&&f.push(a.Validators.maxLength(r)),void 0!==i&&f.push(a.Validators.email),void 0!==c&&f.push(a.Validators.min(c)),void 0!==s&&f.push(a.Validators.max(s)),void 0!==l&&f.push(a.Validators.pattern(l)),this.fb.control({disabled:t,value:u},f)},e.prototype.ngOnDestroy=function(){this.component&&this.component.destroy()},n([c.Input(),r("design:type","function"==typeof(t=void 0!==s.FieldConfig&&s.FieldConfig)?t:Object)],e.prototype,"field",void 0),n([c.Input(),r("design:type","function"==typeof(o=void 0!==a.FormGroup&&a.FormGroup)?o:Object)],e.prototype,"group",void 0),n([c.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=n([c.Directive({selector:"[dynamicField]"}),i(3,c.Inject(s.FIELD_DICT_TOKEN)),r("design:paramtypes",["function"==typeof(l=void 0!==c.ComponentFactoryResolver&&c.ComponentFactoryResolver)?l:Object,"function"==typeof(u=void 0!==c.ViewContainerRef&&c.ViewContainerRef)?u:Object,"function"==typeof(f=void 0!==a.FormBuilder&&a.FormBuilder)?f:Object,"function"==typeof(p=void 0!==s.FieldDictionary&&s.FieldDictionary)?p:Object])],e)}();t.DynamicFieldDirective=l},function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t=i([c.Component({selector:"layout-basic",template:o(43)})],t)}(o(7).BaseLayout);t.BasicLayoutComponent=a},function(e,t){e.exports='<div class="row">\n    <div class="col-12">\n        <h2>{{formConfig.title}}</h2>\n        <div *ngFor="let field of formConfig.fields" class="mb-2">\n            <div class="row">\n                <label class="col-2 font-weight-bold col-form-label">{{field.label}}\n                    <span class="required-icon" [hidden]="!field.required">*</span>\n                </label>\n                <div class="col-10">\n                    <div dynamicField [field]="field" [group]="group" [model]="model"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'},function(e,t){e.exports=require("ngx-quill")},function(e,t){e.exports=require("@ng-bootstrap/ng-bootstrap")}])});