import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs'; 

import { BaseService } from "../../shared/base.service";
import { ConfigService } from '../../shared/config.service';
import { environment } from '../../../environments/environment';
import * as process from "process";
//declare var process: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient, private configService: ConfigService) { 
    super();     
    
    this.manager.getUser().then(user => { 
      this.user = user;      
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() { 
    return this.manager.signinRedirect();   
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this._authNavStatusSource.next(this.isAuthenticated());      
  }  

  register(userRegistration: any) {    
    return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  signout() {
    this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  var env = process && process.env ? <any>process.env : environment;
  return {
      //authority: 'http://auth.server:5000',
      authority: env.AUTH_SERVER_URLS,
      client_id: 'angular_spa',
      //redirect_uri: 'http://spa.client:4200/auth-callback',
      //post_logout_redirect_uri: 'http://spa.client:4200/',
      redirect_uri: env.SPA_CLIENT_URLS + '/auth-callback',
      post_logout_redirect_uri: env.SPA_CLIENT_URLS + '/',
      response_type:"id_token token",
      scope:"openid profile email api.read",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      //silent_redirect_uri: 'http://spa.client:4200/silent-refresh.html'
      silent_redirect_uri: env.SPA_CLIENT_URLS + '/silent-refresh.html'
  };
}
