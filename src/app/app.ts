/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/source/all';
import {CreditForm} from './components/credit-card-entry-form/credit-card';
import {AddressForm} from './components/delivery-address-entry-form/address';
import {Preferences} from './components/preferences/preferences';
import {UserService} from './services/user';

@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS, UserService],
  directives: [ ...ROUTER_DIRECTIVES, CORE_DIRECTIVES, MATERIAL_DIRECTIVES, CreditForm, AddressForm, Preferences],
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
    tabs = [
            'Credit',
            'Address',
            'Preferences'
        ];
    constructor(
        public userService:UserService,
        private _router:Router
    ){}

    login() {
        return this.userService.login()
    }

    setupCredit() {
        this._router.navigate(['Credit'])
    }

    logout(){
        return this.userService.logout()
    }

    loggedIn() {
        return this.userService.loggedIn()
    }

    getUserInfo() {
        return this.userService.getUserInfo()
    }

}

