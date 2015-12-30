import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/source/all'

@Component({
  selector: 'preferences',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: '<h1>Preferences</h1>'
})

export class Preferences {
    values:string = '';

    onKey(event:any) {
        this.values += event.target.value + " | ";
    }
}
