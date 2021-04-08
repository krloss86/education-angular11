import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AlertService {

  private subject = new Subject();
  
  constructor(private router: Router) { 

    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart) {
          this.clear();
        }
      }
    );
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.subject.next(
      {
        type: 'success',
        text: message
      }
    );
  }

  error(message: string) {
    this.subject.next(
      {
        type: 'error',
        text: message
      }
    );
  }
  
  clear() {
    this.subject.next();
  }

}
