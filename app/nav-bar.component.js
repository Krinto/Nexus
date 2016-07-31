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
var icon_1 = require('@angular2-material/icon');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button/button');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var list_1 = require('@angular2-material/list/list');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var site_component_1 = require('./site.component');
var site_service_1 = require('./site.service');
var NavBarComponent = (function () {
    function NavBarComponent(siteService) {
        this.siteService = siteService;
        this.siteChange = new core_1.EventEmitter();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.getSites();
    };
    NavBarComponent.prototype.getSites = function () {
        var _this = this;
        return this.siteService.getSites()
            .then(function (sites) {
            _this.sites = sites;
            _this.currentSite = _this.sites[0];
            _this.siteChange.emit({
                value: _this.currentSite
            });
        });
    };
    NavBarComponent.prototype.onSelect = function (site) {
        this.currentSite = site;
        this.siteChange.emit({
            value: this.currentSite
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavBarComponent.prototype, "siteChange", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/nav-bar.component.html',
            styleUrls: ['app/nav-bar.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton, icon_1.MdIcon, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, site_component_1.SiteComponent],
            providers: [site_service_1.SiteService, icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [site_service_1.SiteService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map