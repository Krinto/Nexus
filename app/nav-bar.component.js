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
            template: "\n    <md-sidenav-layout class=\"demo-root\" fullscreen>\n    <md-sidenav #start>\n        <md-nav-list>\n        <a md-list-item *ngFor=\"let site of sites\" (click)=\"onSelect(site); start.close();\">\n            {{ site.title }}\n        </a>\n        <hr>\n        <a md-list-item (click)=\"start.close()\"><md-icon class=\"md-24\" >settings</md-icon>Settings</a>\n        <a md-list-item (click)=\"start.close()\"><md-icon class=\"md-24\" >clear</md-icon>Close</a>\n        </md-nav-list>\n    </md-sidenav>\n    <div>\n        <md-toolbar color=\"primary\">\n        <button md-icon-button (click)=\"start.open()\">\n            <md-icon class=\"md-24\">menu</md-icon>\n        </button>\n        <div class=\"demo-toolbar\">\n            <h1>Nexus</h1>\n        </div>\n        </md-toolbar>\n    </div>\n    </md-sidenav-layout>\n  ",
            styles: ["\n    body {\n        font-family: Roboto, 'Helvetica Neue', sans-serif;\n    }\n    body * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    body md-sidenav {\n        min-width: 15%;\n    }\n    body md-sidenav [md-button] {\n        width: 100%;\n        position: relative;\n        bottom: 0;\n        margin: 24px 0;\n    }\n    body .demo-content {\n        padding: 32px;\n    }\n    body md-toolbar md-icon {\n        cursor: pointer;\n    }\n    body md-toolbar .demo-toolbar {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n    }\n    body h1 {\n        font-size: 20px;\n    }\n  "],
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton, icon_1.MdIcon, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES],
            providers: [site_service_1.SiteService, icon_1.MdIconRegistry],
            pipes: [],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [site_service_1.SiteService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map