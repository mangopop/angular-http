import {Component} from '@angular/core';
import {TohComponent} from './toh.component';

@Component({
    selector: 'my-app',
    template: '<h1>http testing</h1><my-toh></my-toh>',
    directives: [TohComponent]
})
export class AppComponent { }
