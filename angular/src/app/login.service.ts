import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string): boolean {
    
    //httpclient
    //el la web!
    if(email ==='email@email.com' && password === "1234") {
      return true;
    }else {
      return false;
    }

  }
}
