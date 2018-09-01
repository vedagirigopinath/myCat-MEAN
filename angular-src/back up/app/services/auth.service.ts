import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  //my own service properties--------------------------------------------------------------
  selectedProducts: any = [ ];
  Products: any = [];
  //---------------------------------------------------------------------------------------
  constructor(private http: Http) {
      //this.isDev = true;  // Change to false before deployment
        if (sessionStorage.getItem('selectedProducts')) {
          this.selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
        }
      }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  //my own service--------------------------------------------------------------
  getProducts(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/data', {headers: headers})
      .map(res => res.json());
  }

  getProduct(id: any){
    return this.getProducts()
    .map( products => products.filter(products => products._id === id)[0]);
  }
  
  
  
//-------------------------------------------------------------------------------
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    sessionStorage.clear();
  }
}
