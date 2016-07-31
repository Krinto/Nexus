import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { BROWSER_SANITIZATION_PROVIDERS, SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

import { Site } from './site';

@Component({
  selector: 'site',
  templateUrl: 'app/site.component.html',
  styles: [`
    .iframe {
        width: 100%;
        height: calc(100% - 64px);
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