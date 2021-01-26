import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../Services/auth.service';
import { ScriptsService } from './../../../@shared/Services/scripts.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iniciarSesion: FormGroup;
  Registrarse: FormGroup;

  constructor(
    private scriptService: ScriptsService,
    private authService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.iniciarSesion = this.builder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });

    this.Registrarse = this.builder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      contraseña: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit(): void {
    this.scriptService.Carga(['login']);
  }

  SignIn(): any {
    this.authService.signIn(this.iniciarSesion.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);

          this.router.navigate(['/']);
        },
        err => {
          Swal.fire(
            'Lo sentimos!',
            `${err.error.message}!`,
            'error'
          );
        }
      );
  }

  Registro(): any {

      this.authService.signUp(this.Registrarse.value)
          .subscribe(
            res => {
              Swal.fire(
                'Felicidades!',
                `Se ha completado su registro!`,
                'success'
              )
            },
            err => {
              Swal.fire(
                'Lo sentimos!',
                `El proceso de validacion ha fallado, vuelve a intentarlo!`,
                'error'
              );
            }
          );
  }

}
