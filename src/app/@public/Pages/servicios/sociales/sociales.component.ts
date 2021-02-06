import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/@public/Services/json.service';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-sociales',
  templateUrl: './sociales.component.html',
  styleUrls: ['./sociales.component.css']
})
export class SocialesComponent implements OnInit {

 servicios;

  constructor(
    public darkmodeService: DarkmodeService,
    private jsonService: JsonService
    ) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/servicios.json')
    .subscribe(
      res => {this.servicios = res[1]; },
      err => {console.log(err); }
    );
  }

}
