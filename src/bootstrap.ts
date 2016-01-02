/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
// include for development builds
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
// include for production builds
import {enableProdMode} from 'angular2/core';

import {AuthHttp} from 'angular2-jwt';


import {MATERIAL_PROVIDERS} from 'ng2-material/all';
/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
enableProdMode() // include for production builds
function main() {
  return bootstrap(App, [
    // These are dependencies of our App
    MATERIAL_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
    ELEMENT_PROBE_PROVIDERS,
    provide(AuthHttp, { useFactory: () => {
        return new AuthHttp();
    }})
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
