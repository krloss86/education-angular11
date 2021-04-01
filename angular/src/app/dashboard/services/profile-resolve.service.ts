import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<UserProfile>{

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserProfile | Observable<UserProfile> | Promise<UserProfile> {
      //localStorage
      let userId = +localStorage.getItem('userId');
      if(!userId) {
        userId = 2;
      }

      //api/users/2
      return this.httpClient.get<UserProfile>(`${environment.url}/api/users/${userId}`);      
  }
}
