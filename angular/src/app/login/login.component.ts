import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading= false;
  submitted= false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['',Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    
    if(this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    //invocar a nuestro servicio, rxjs
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    //esto no se ejecuta sin un suscribe
    this.authenticationService.login(username, password)
      //.pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error =>{
          alert('User/Password invalid');
          this.loading = false;
        }
      );
  }

  get f() { return this.loginForm.controls; }
}
