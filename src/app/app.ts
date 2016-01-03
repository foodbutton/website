/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/source/all';
import {Settings} from './components/settings/settings';
import {OrderButton} from './components/order-button/order'
import {UserService} from './services/user';
import {OrderService} from './services/order';

@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS, UserService, OrderService],
  directives: [ ...ROUTER_DIRECTIVES, CORE_DIRECTIVES, MATERIAL_DIRECTIVES, Settings, OrderButton],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./app.tpl.html')
})

@RouteConfig([
  { path: '/settings/...', component: Settings, as: 'Settings', useAsDefault: true },
  { path: '/order', component: OrderButton, as: 'Order' }
])

export class App {
    constructor(
        private _userService:UserService,
        private _router:Router
    ){}

    login() {
        return this._userService.login()
    }

    logout(){
        return this._userService.logout()
    }

    loggedIn() {
        return this._userService.loggedIn()
    }

    getUserInfo() {
        return this._userService.getUserInfo()
    }

}

