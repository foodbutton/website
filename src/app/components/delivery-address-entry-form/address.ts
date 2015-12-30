import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/source/all';


@Component({
  selector: 'address-entry-form',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./address.tpl.html')
})

export class AddressForm {
    values:string = '';
}
