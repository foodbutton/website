import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all'

@Component({
  selector: 'preferences',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...MATERIAL_DIRECTIVES],
  template: require('./preferences.tpl.html')
})

export class Preferences {
    values:string = '';

    onKey(event:any) {
        this.values += event.target.value + " | ";
    }
}
