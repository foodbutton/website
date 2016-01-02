import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Address} from './address-model'


@Component({
  selector: 'address-entry-form',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...MATERIAL_DIRECTIVES],
  template: require('./address.tpl.html')
})

export class AddressForm {
    submitted = false;
    model = new Address('', '', '', '', '', '');

    constructor(
    ) {}


}
