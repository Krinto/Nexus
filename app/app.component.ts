import { Component, OnInit } from '@angular/core'

import { Site } from './site';
import { SiteComponent } from './site.component';
import { NavBarComponent } from './nav-bar.component';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar [sites]="sites" (siteChange)="siteChanged($event);"></nav-bar>
    <md-content class="container">
        <site [site]="currentSite"></site>
    </md-content>
  `,
  directives: [SiteComponent, NavBarComponent]
})

export class AppComponent implements OnInit { 
  title = 'Nexus';
  sites: Site[];
  currentSite: Site;

  ngOnInit() {
    
  }

  public siteChanged(event) {
    this.currentSite = event.value;
  }

  onSelect(site: Site) {
    this.currentSite = site;
  }
}
