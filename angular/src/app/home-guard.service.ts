import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {
  
  constructor(
      private router: Router,
      private authService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    let userLogger = this.authService.currentUser();
    if(!userLogger) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}