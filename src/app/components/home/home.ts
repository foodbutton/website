import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MdDialog} from 'ng2-material/all'
import {Media} from 'ng2-material/source/core/util/media'
import {ElementRef} from "angular2/core";
import {DOM} from "angular2/src/platform/dom/dom_adapter";

import {MdDialogConfig, MdDialogContent, MdDialogRef} from "ng2-material/components/dialog/dialog";

@Component({
  selector: 'home',
  providers: [ ...FORM_PROVIDERS],
  directives: [MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./home.tpl.html')
})

export class Home {

    constructor(
        private _router:Router
    ){}

    validateUser() {
        this._router.navigate(['Credit'])
    }


}
