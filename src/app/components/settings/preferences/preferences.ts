import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all'
import {UserService} from '../../../services/user';
import {Prefs} from './prefs-model'

@Component({
  selector: 'preferences',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS],
  directives: [ ...MATERIAL_DIRECTIVES],
  template: require('./preferences.tpl.html')
})

export class Preferences implements OnInit {
    userInfo:any
    categories = [
        'Omnivore',
        'Vegetarian',
        'Vegan'
    ];
    model = new Prefs(
        this.categories[0],
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        ''
    );
    constructor(
        private _router:Router,
        private _userService:UserService
    ){}

     ngOnInit() {
        this.userInfo = JSON.parse(this._userService.getUserInfo())
        console.log('On Step 1')
    }

    savePrefs() {
        localStorage.setItem('myPrefs', JSON.stringify(this.model))
        console.log('Saved', this.model)
        setTimeout(() => {
            this._router.navigate(['Address'])
        }, 200)
    }
}
