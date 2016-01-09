import {Component, OnInit} from 'angular2/core';
import {Router, Location} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Credit} from './credit';
import {UserService} from '../../services/user';

declare var Stripe;
Stripe.setPublishableKey('pk_test_wUzLERCtFlMGQt8iL9Bj8DlB');

@Component({
  selector: 'credit-entry-form',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...MATERIAL_DIRECTIVES],
  template: require('./credit-card.tpl.html')
})



export class CreditForm implements OnInit {
   model = new Credit('', '', '', '');
   userData:any;
   submitted = false;

   constructor(
      private _router:Router,
      private _userService:UserService,
      private _location:Location
   ){
   }

   private _handler(status:string, response:any) {
       if (response.error) {
           console.log(response.error.message)
       } else {
           let token = response.id;
           localStorage.setItem('stripeData', JSON.stringify(token))
           console.log(token)
       }
   }
   ngOnInit(){
       this.userData = JSON.parse(this._userService.getUserInfo())
       console.log('On Step 3')
    }

    onBlur() {
      console.log(this.model)
    }

    saveCard() {

        console.log(this.model)
         Stripe.card.createToken({
            number: this.model.cardNumber,
            cvc: this.model.cardCVC,
            exp_month: parseInt(this.model.cardExpMonth),
            exp_year: parseInt(this.model.cardExpYear)
        }, this._handler)
        setTimeout(() => {
           this._location.go('/order')
           this._router.navigateByUrl('/order', true)
        }, 200)
    }
}
