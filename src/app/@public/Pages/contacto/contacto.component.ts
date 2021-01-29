import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
  }

}
