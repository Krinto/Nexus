import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { BROWSER_SANITIZATION_PROVIDERS, SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

import { Site } from './site';

@Component({
  selector: 'site',
  template: `
  <div class="fill-space">
    <iframe class="iframe" *ngIf="site?.id !== 0" [src]="url" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
    <div *ngIf="site?.id === 0">
        <h1>Dashboard</h1>
    </div>
  </div>
  `,
  styles: [`
    .iframe {
        width: 100%;
        height: 100%;
        margin: 64px 0 0 0;
    }
  `],
  providers: [BROWSER_SANITIZATION_PROVIDERS]
})
export class SiteComponent implements OnChanges {
    @Input()
    site: Site;
    url: SafeResourceUrl;
    
    constructor(private sanitizer: DomSanitizationService) {}

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes['site']) {
            if (changes['site'].currentValue !== undefined) {
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(changes['site'].currentValue.url);
            }
        }
    }
}