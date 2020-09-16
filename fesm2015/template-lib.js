import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class TemplateLibService {
    constructor() { }
}
TemplateLibService.ɵprov = ɵɵdefineInjectable({ factory: function TemplateLibService_Factory() { return new TemplateLibService(); }, token: TemplateLibService, providedIn: "root" });
TemplateLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TemplateLibService.ctorParameters = () => [];

class TemplateLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplateLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-template-lib',
                template: `
    <p>
      template-lib works!
    </p>
  `
            },] }
];
TemplateLibComponent.ctorParameters = () => [];

class TemplateLibModule {
}
TemplateLibModule.decorators = [
    { type: NgModule, args: [{
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

export { TemplateLibComponent, TemplateLibModule, TemplateLibService };
//# sourceMappingURL=template-lib.js.map
