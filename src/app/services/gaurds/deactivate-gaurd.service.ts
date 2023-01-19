import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IDactivateGaurd{
  canExit : ()=>boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
}) 


export class DeactivateGaurdService implements CanDeactivate<IDactivateGaurd> {

  constructor() { }
  canDeactivate(component: IDactivateGaurd, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return component.canExit();
  }
  
}
