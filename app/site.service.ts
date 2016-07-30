import { Injectable } from '@angular/core';

import { Site } from './site';
import { SITES } from './mock-sites';

@Injectable()
export class SiteService {

    getSites(){
        return Promise.resolve(SITES);
    }
}
