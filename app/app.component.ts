import { Component, OnInit } from '@angular/core'

import { Site } from './site';
import { NavBarComponent } from './nav-bar.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [NavBarComponent]
})

export class AppComponent implements OnInit { 
  title = 'Nexus';
  currentSite: Site;

  ngOnInit() {
    
  }

  public siteChanged(event) {
    this.currentSite = event.value;
  }
}
