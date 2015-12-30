import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/source/all';
import {Credit} from './credit';


@Component({
  selector: 'credit-entry-form',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./credit-card.tpl.html')
})



export class CreditForm {
   model = new Credit('','','','')
   submitted = false;

   onSubmit() {
       this.submitted = true
   }

   get diagnostic() {
       return JSON.stringify(this.model)
   }
}
