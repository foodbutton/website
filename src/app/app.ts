/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/source/all';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Home} from './components/home/home';
import {CreditForm} from './components/credit-card-entry-form/credit-card';
import {AddressForm} from './components/delivery-address-entry-form/address';
import {Preferences} from './components/preferences/preferences';

declare var Auth0Lock;
declare var AWS;


import './app.scss';


@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, MATERIAL_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  styles: [],
  template: require('./app.tpl.html')
})

@RouteConfig([
  {path:'/',                      name: 'Home',          component: Home},
  {path:'/credit-entry',          name: 'Credit',        component: CreditForm},
  {path:'/delivery-entry',        name: 'Address',       component: AddressForm},
  {path:'/preferences',           name: 'Preferences',   component: Preferences}
])


export class App {

  lock = new Auth0Lock('iJFer7zN0TK9Hz1Bcgn9keMCPMSwDV8G', 'mixedmedia.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: Http, public authHttp: AuthHttp) {}

  login() {
    this.lock.show((err: string, profile: string, id_token: string) => {

      if (err) {
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

      AWS.config.region = 'us-east-1';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'us-east-1:5171085d-4117-4d63-8701-eb06637a7281',
          Logins: {
              'graph.facebook.com': id_token
          }
      })

      AWS.config.credentials.get(() => {
          let syncClient = new AWS.CognitoSyncManager();

          syncClient.openOrCreateDataset('userProfiles', (err, dataset) => {
              dataset.put('profile', profile, (err, record) => {
                  dataset.synchronize({
                      onSuccess: (data, newRecords) => {
                          console.log(
                              data,
                              newRecords
                          )
                      }
                  })
              })
          })
      })

    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getThing() {
    this.http.get('http://localhost:3001/ping')
      .subscribe(
        data => console.log(data.json()),
        err => console.log(err),
        () => console.log('Complete')
      );
  }

  getSecretThing() {
    // this.authHttp.get('http://localhost:3001/secured/ping')
    //   .subscribe(
    //     data => console.log(data.json()),
    //     err => console.log(err),
    //     () => console.log('Complete')
    //   );
    console.log(AWS)
  }

  tokenSubscription() {
    this.authHttp.tokenStream.subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Complete')
      );
  }

  useJwtHelper() {
    var token = localStorage.getItem('id_token');

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
  }
}

