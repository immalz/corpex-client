import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';
import { ScriptsService } from 'src/app/@shared/Services/scripts.service';

import {MatDialog } from '@angular/material/dialog';
import { JsonService } from '../../Services/json.service';
import { ComentarioComponent } from '../../Components/comentario/comentario.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  comentarios;

   constructor(
     public darkmodeService: DarkmodeService,
     private scriptService: ScriptsService,
     private jsonService: JsonService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.scriptService.Carga(['slider']);
    this.jsonService.getJson('assets/json/comentarios.json')
    .subscribe (
      res => {
        this.comentarios = res;
      }
    );
  }

  nuevoComentario(): any {
    this.dialog.open(ComentarioComponent);
  }
}
