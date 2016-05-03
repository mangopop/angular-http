
import { Component }         from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';

import { HeroListComponent } from './hero-list.component';
import { HeroService }       from './hero.service';

import { provide }           from '@angular/core';
import { XHRBackend }        from '@angular/http';

// in-memory web api imports
// import { InMemoryBackendService,
//     SEED_DATA }          from 'angular2-in-memory-web-api/core';
// import { HeroData }          from '../hero-data';

@Component({
    selector: 'my-app',
    template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
    directives: [HeroListComponent],
    providers:  [
        HTTP_PROVIDERS,
        HeroService,
        // in-memory web api providers
        // provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        // provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
    ]
})
export class TohComponent { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */