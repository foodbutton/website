import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Address} from './address-model'
import {UserService} from '../../../services/user';


@Component({
  selector: 'address-entry-form',
  providers: [ ...FORM_PROVIDERS, UserService],
  directives: [ ...MATERIAL_DIRECTIVES],
  template: require('./address.tpl.html')
})

export class AddressForm implements OnInit {
    submitted = false;
    model = new Address('','','','','','');;
    userData:any;

    constructor(
        private _userService:UserService,
        private _router:Router
    ) {}

    ngOnInit(){
       this.userData = JSON.parse(this._userService.getUserInfo())
       console.log('On Step 2')
    }

    onBlur() {
        console.log(this.model)
    }

    saveAddress() {
        localStorage.setItem('address', JSON.stringify(this.model))

        console.log('Saved', this.model)
        setTimeout(() => {
            this._router.navigate(['Payment'])
        }, 200)


    }
}
