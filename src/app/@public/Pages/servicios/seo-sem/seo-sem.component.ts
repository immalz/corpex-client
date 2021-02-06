import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/@public/Services/json.service';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-seo-sem',
  templateUrl: './seo-sem.component.html',
  styleUrls: ['./seo-sem.component.css']
})
export class SeoSemComponent implements OnInit {


  servicios;

  constructor(
    public darkmodeService: DarkmodeService,
    private jsonService: JsonService
    ) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/servicios.json')
    .subscribe(
      res => {this.servicios = res[0]; },
      err => {console.log(err); }
    );
  }
}
