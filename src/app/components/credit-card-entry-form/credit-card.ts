import {Component, ElementRef, Inject} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/source/all';
import {Credit} from './credit';

declare var Stripe;
Stripe.setPublishableKey('pk_test_wUzLERCtFlMGQt8iL9Bj8DlB');

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
   model = new Credit('', '', '', '');
   submitted = false;

   constructor(
      @Inject(ElementRef) elementRef: ElementRef
   ){
       var el:any = elementRef.nativeElement;
   }

   private _handler(status:string, response:any) {
       if (response.error) {
           console.log(response.error.message)
       } else {
           let token = response.id;
           console.log(token)
       }
   }

   onSubmit() {
        Stripe.card.createToken({
            number: this.model.cardNumber,
            cvc: this.model.cardCVC,
            exp_month: parseInt(this.model.cardExpMonth),
            exp_year: parseInt(this.model.cardExpYear)
        })
   }


}
