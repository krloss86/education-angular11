import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {
  
  constructor(
      private router: Router,
      private authService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userLogger = this.authService.currentUser();
    if(!userLogger) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
