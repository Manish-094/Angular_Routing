import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(){
    this.isLoggedIn = true;
  }
  logOut(){
    this.isLoggedIn = false;
  }
isAuthenticated(){
  return this.isLoggedIn;
}
  constructor() { }
}
