import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-sociales',
  templateUrl: './sociales.component.html',
  styleUrls: ['./sociales.component.css']
})
export class SocialesComponent implements OnInit {


  constructor(public darkmodeService: DarkmodeService) { }


  ngOnInit(): void {
  }

}
