import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;
declare var AWS;


@Injectable()
export class UserService {
    lock = new Auth0Lock('iJFer7zN0TK9Hz1Bcgn9keMCPMSwDV8G', 'mixedmedia.auth0.com');
    jwtHelper: JwtHelper = new JwtHelper();
    userInfo = {};
    constructor(public http: Http, public authHttp: AuthHttp) {}

    login() {

        this.lock.show((err: string, profile: any, id_token: string) => {

            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);

            AWS.config.region = 'us-east-1';
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:5171085d-4117-4d63-8701-eb06637a7281',
                Logins: {
                    'graph.facebook.com': profile.identities[0].access_token
                }
            });

            AWS.config.credentials.get(function() {

                var client = new AWS.CognitoSyncManager();
                client.openOrCreateDataset('userProfiles', function(err, dataset) {

                    dataset.put('profile', JSON.stringify(profile), function(err, record){
                        console.log(record)
                        localStorage.setItem('awsCred', JSON.stringify(record))
                    })

                    dataset.synchronize({

                        onSuccess: function(data, newRecords) {
                            console.log(data)
                        }

                    });

                });

            });

        })

    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }

    getUserInfo() {
        return this.userInfo = localStorage.getItem('awsCred')
    }
};