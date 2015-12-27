/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';


@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: `
    <header>
      <h1 class="title">FoodButton {{+ '!'}}</h1>
    </header>

    <main>
    </main>
  `
})


export class App {
    url: string = 'http://github.com/foodbutton';
}
