import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate,CanActivateChild {

  constructor(private authService: AuthService,private router: Router) {
    
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let isLoggedIn = this.authService.isAuthenticated();
    if(isLoggedIn){
      return true;
    }
    else{
       this.router.navigate(['/home']);
       return false;
    } 
  }
 canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.canActivate(route,state);
 }  
}
