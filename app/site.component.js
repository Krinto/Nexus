"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var site_1 = require('./site');
var SiteComponent = (function () {
    function SiteComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SiteComponent.prototype.ngOnChanges = function (changes) {
        if (changes['site']) {
            if (changes['site'].currentValue !== undefined) {
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(changes['site'].currentValue.url);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', site_1.Site)
    ], SiteComponent.prototype, "site", void 0);
    SiteComponent = __decorate([
        core_1.Component({
            selector: 'site',
            template: "\n  <div class=\"fill-space\">\n    <iframe class=\"iframe\" *ngIf=\"site?.id !== 0\" [src]=\"url\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>\n    <div *ngIf=\"site?.id === 0\">\n        <h1>Dashboard</h1>\n    </div>\n  </div>\n  ",
            styles: ["\n    .iframe {\n        width: 100%;\n        height: 100%;\n        margin: 64px 0 0 0;\n    }\n  "],
            providers: [platform_browser_1.BROWSER_SANITIZATION_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], SiteComponent);
    return SiteComponent;
}());
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.component.js.map