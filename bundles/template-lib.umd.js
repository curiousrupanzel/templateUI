(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('template-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['template-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var TemplateLibService = /** @class */ (function () {
        function TemplateLibService() {
        }
        return TemplateLibService;
    }());
    TemplateLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TemplateLibService_Factory() { return new TemplateLibService(); }, token: TemplateLibService, providedIn: "root" });
    TemplateLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TemplateLibService.ctorParameters = function () { return []; };

    var TemplateLibComponent = /** @class */ (function () {
        function TemplateLibComponent() {
        }
        TemplateLibComponent.prototype.ngOnInit = function () {
        };
        return TemplateLibComponent;
    }());
    TemplateLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-template-lib',
                    template: "\n    <p>\n      template-lib works!\n    </p>\n  "
                },] }
    ];
    TemplateLibComponent.ctorParameters = function () { return []; };

    var TemplateLibModule = /** @class */ (function () {
        function TemplateLibModule() {
        }
        return TemplateLibModule;
    }());
    TemplateLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TemplateLibComponent],
                    imports: [],
                    exports: [TemplateLibComponent]
                },] }
    ];

    /*
     * Public API Surface of template-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TemplateLibComponent = TemplateLibComponent;
    exports.TemplateLibModule = TemplateLibModule;
    exports.TemplateLibService = TemplateLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=template-lib.umd.js.map
