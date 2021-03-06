import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';
import {UserService} from '../../services/user';
import {OrderService} from '../../services/order'

import {Order} from './order-model';

@Component({
  selector: 'order-button',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS, OrderService, UserService],
  directives: [ ...ROUTER_DIRECTIVES, CORE_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  template: require('./order-button.tpl.html')
})

export class OrderButton implements OnInit{
   model:Order;
   userData:any;

   constructor(
      private _userService:UserService,
      private _orderService:OrderService
   ){
   }

   ngOnInit() {
       this.userData = JSON.parse(this._userService.getUserInfo())
       this.model = new Order(
           this.userData.LastModifiedBy,
           JSON.parse(localStorage.getItem('address')),
           JSON.parse(localStorage.getItem('myPrefs')),
           JSON.parse(localStorage.getItem('stripeData'))
       )
   }

   orderNow() {

       setTimeout(() => {
          this._orderService.syncOrderInfo(this.model)
       }, 300)

   }


}