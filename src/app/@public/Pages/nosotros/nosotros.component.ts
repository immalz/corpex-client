import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';
import { JsonService } from '../../Services/json.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

 panelOpenState = false;
 tarjetas;

   constructor(public darkmodeService: DarkmodeService,
               private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/tarjetas.json')
    .subscribe(
      res => {this.tarjetas = res; },
      err => {console.log(err); }
    );
  }

}
