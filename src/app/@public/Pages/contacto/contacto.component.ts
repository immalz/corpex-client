import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: FormGroup;
  constructor(
    public darkmodeService: DarkmodeService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.contacto = this.builder.group({
      nombre: ['', Validators.required],
      asunto: ['', Validators.required],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      celular: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
      mensaje: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }


  enviarCorreo(): any {
    Swal.fire(
      'Gracias por contactarte con CORPEX!',
      `Nos comunicaremos contigo en breve!`,
      'success'
    );

    this.router.navigate(['/']);
  }

}
