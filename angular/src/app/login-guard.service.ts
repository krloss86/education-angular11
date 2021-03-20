import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //verficar si el localStorage ya tiene un User guardao
    let currentUser = localStorage.getItem('currentUser');
    if(currentUser) {
      this.router.navigate(['/home']);    
    }
    return true;
  }

  
}
