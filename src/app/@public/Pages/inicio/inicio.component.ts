import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';
import { ScriptsService } from 'src/app/@shared/Services/scripts.service';
// import Swiper core and required components
import SwiperCore, { EffectFade } from 'swiper';
import { JsonService } from '../../Services/json.service';

SwiperCore.use([EffectFade]);
// install Swiper components

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

   constructor(
     public darkmodeService: DarkmodeService,
     private scriptService: ScriptsService,
     private jsonService: JsonService) { }

  ngOnInit(): void {
    this.scriptService.Carga(['slider']);
  }
}
