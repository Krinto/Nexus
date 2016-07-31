import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import { Site } from './site';
import { SiteComponent } from './site.component';
import { SiteService } from './site.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav-bar.component.html',
  styleUrls: ['app/nav-bar.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, SiteComponent],
  providers: [SiteService, MdIconRegistry]
})
export class NavBarComponent implements OnInit {
    sites: Site[];
    @Output()
    siteChange = new EventEmitter();
    currentSite: Site;

      constructor(private siteService: SiteService) { }

    ngOnInit() {
        this.getSites();
    }

    getSites() {
        return this.siteService.getSites()
        .then(sites => {
            this.sites = sites;
            this.currentSite = this.sites[0];
            this.siteChange.emit({
                value: this.currentSite
            });
        });
    }
    
    public onSelect(site: Site) {
        this.currentSite = site;
        this.siteChange.emit({
            value: this.currentSite
        });
    }
}