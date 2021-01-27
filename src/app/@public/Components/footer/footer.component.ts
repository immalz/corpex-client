import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
  }

  contacto(): any {
    this.router.navigate(['contacto']);
  }



}
