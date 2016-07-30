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
var site_component_1 = require('./site.component');
var nav_bar_component_1 = require('./nav-bar.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Nexus';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.siteChanged = function (event) {
        this.currentSite = event.value;
    };
    AppComponent.prototype.onSelect = function (site) {
        this.currentSite = site;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav-bar [sites]=\"sites\" (siteChange)=\"siteChanged($event);\"></nav-bar>\n    <md-content class=\"container\">\n        <site [site]=\"currentSite\"></site>\n    </md-content>\n  ",
            directives: [site_component_1.SiteComponent, nav_bar_component_1.NavBarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map