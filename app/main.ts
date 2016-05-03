import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {TohComponent} from "./toh.component";
// Add all operators to Observable
import 'rxjs/Rx';


// import { WikiComponent }      from './wiki/wiki.component';
// import { WikiSmartComponent } from './wiki/wiki-smart.component';
// import { TohComponent }       from './toh/toh.component';

// bootstrap(WikiComponent);
// bootstrap(WikiSmartComponent);
bootstrap(TohComponent, [HTTP_PROVIDERS]);
