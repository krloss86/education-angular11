import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponenetDeactivate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root'
})
export class CanExitGuardService implements CanDeactivate<CanComponenetDeactivate>{

  constructor() { }
  canDeactivate(component: CanComponenetDeactivate, 
      currentRoute: ActivatedRouteSnapshot, 
      currentState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate ? component.canDeactivate() : true;
  }
}
