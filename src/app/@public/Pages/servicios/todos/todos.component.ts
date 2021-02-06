import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/@public/Services/json.service';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  servicios;

  constructor(
    public darkmodeService: DarkmodeService,
    private jsonService: JsonService
    ) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/servicios.json')
    .subscribe(
      res => {this.servicios = res; },
      err => {console.log(err); }
    );
  }

}
