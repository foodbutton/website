/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/source/all';
import {CreditForm} from './components/credit-card-entry-form/credit-card';
import {AddressForm} from './components/delivery-address-entry-form/address';
import {Preferences} from './components/preferences/preferences';
import {UserService} from './services/user';

import './app.scss';


@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS, UserService],
  directives: [ ...ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./app.tpl.html')
})

@RouteConfig([
  {path:'/credit-entry',          name: 'Credit',        component: CreditForm},
  {path:'/delivery-entry',        name: 'Address',       component: AddressForm},
  {path:'/preferences',           name: 'Preferences',   component: Preferences}
])


export class App {

    constructor(
        private _userService:UserService,
        private _router:Router
    ){}

    login() {
        return this._userService.login()
    }

    setupCredit() {
        this._router.navigate(['Credit'])
    }

    logout(){
        return this._userService.logout()
    }

    loggedIn() {
        return this._userService.loggedIn()
    }

}

