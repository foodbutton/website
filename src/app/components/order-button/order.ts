import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/source/all';
import {CreditForm} from '../credit-card-entry-form/credit-card';
import {AddressForm} from '../delivery-address-entry-form/address';
import {Preferences} from '../preferences/preferences';
import {UserService} from '../../services/user';
import {OrderService} from '../../services/order'

import {Order} from './order-model';

@Component({
  selector: 'order-button',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS, OrderService],
  directives: [ ...ROUTER_DIRECTIVES, CORE_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  template: require('./order-button.tpl.html')
})

export class OrderButton implements OnInit{
   model:Order;
   userData:any;

   constructor(
      private _userService:UserService
   ){
   }

   ngOnInit() {
       this.userData = JSON.parse(this._userService.getUserInfo())
       this.model = new Order(
           this.userData.LastModifiedBy,
           JSON.parse(localStorage.getItem('address')),
           JSON.parse(localStorage.getItem('myPrefs')),
           JSON.parse(localStorage.getItem('creditInfo'))
       )
   }

   orderNow() {

       setTimeout(() => {
           console.log('IdentityId', this.model.identityId);
           console.log('Address', this.model.deliveryAddress);
           console.log('Preferences', this.model.preferences);
           console.log('Card Data', this.model.stripeData);
       }, 300)

   }


}