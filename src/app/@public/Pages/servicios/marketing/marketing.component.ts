import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/@public/Services/json.service';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

servicios;

  constructor(
    public darkmodeService: DarkmodeService,
    private jsonService: JsonService
    ) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/servicios.json')
    .subscribe(
      res => {this.servicios = res[2]; },
      err => {console.log(err); }
    );
  }
}
