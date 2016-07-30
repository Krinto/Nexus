import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import { Site } from './site';
import { SiteService } from './site.service';

@Component({
  selector: 'nav-bar',
  template: `
    <md-sidenav-layout class="demo-root" fullscreen>
    <md-sidenav #start>
        <md-nav-list>
        <a md-list-item *ngFor="let site of sites" (click)="onSelect(site); start.close();">
            {{ site.title }}
        </a>
        <hr>
        <a md-list-item (click)="start.close()"><md-icon class="md-24" >settings</md-icon>Settings</a>
        <a md-list-item (click)="start.close()"><md-icon class="md-24" >clear</md-icon>Close</a>
        </md-nav-list>
    </md-sidenav>
    <div>
        <md-toolbar color="primary">
        <button md-icon-button (click)="start.open()">
            <md-icon class="md-24">menu</md-icon>
        </button>
        <div class="demo-toolbar">
            <h1>Nexus</h1>
        </div>
        </md-toolbar>
    </div>
    </md-sidenav-layout>
  `,
  styles: [`
    body {
        font-family: Roboto, 'Helvetica Neue', sans-serif;
    }
    body * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body md-sidenav {
        min-width: 15%;
    }
    body md-sidenav [md-button] {
        width: 100%;
        position: relative;
        bottom: 0;
        margin: 24px 0;
    }
    body .demo-content {
        padding: 32px;
    }
    body md-toolbar md-icon {
        cursor: pointer;
    }
    body md-toolbar .demo-toolbar {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    body h1 {
        font-size: 20px;
    }
  `],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES],
  providers: [SiteService, MdIconRegistry],
  
  pipes: [],
  encapsulation: ViewEncapsulation.None,
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