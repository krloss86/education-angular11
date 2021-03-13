import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {

  formulario: FormGroup;

  @Input()
  emailRecibidoDelPadre: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService) { 
    console.log(`Constructor: ${this.emailRecibidoDelPadre}`);
    this.createForm();
  }

  ngOnInit(): void {
    // this.createForm();
    console.log(`ngOnInit: ${this.emailRecibidoDelPadre}`);
    this.formulario.setValue({ 
      email: this.emailRecibidoDelPadre,
      password:''
    });
  }

  /**
   * Asignar las validaciones a los elementos en html
   */
  createForm(): void {
    this.formulario = this.formBuilder.group(
      {
        email: ['', [Validators.email] ],
        password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]]
      }
    );
  }

  submitForm(): void {
    
    //si el formulario es valido
    //--> consulta al servicio con email y password
    if(this.formulario.valid) {
      const email = this.formulario.get('email').value;
      const password = this.formulario.get('password').value;

      let isLoggged = this.loginService.login(email,password);

      if(isLoggged) {
        alert('Login exitoso');
      }else {
        alert('usuario/password inválido');
      }
    }else {
      alert('Formulario Invalido')
    }
  }

}
