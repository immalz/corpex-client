import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  comentarioNuevo: FormGroup;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<ComentarioComponent>
    ) {
    this.comentarioNuevo = this.builder.group({
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      titulo: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  SignIn(): any {
    this.dialogRef.close();
    Swal.fire(
      'Excelente!',
      `Su comentario ha sido enviado!`,
      'success'
    );
  }
}
