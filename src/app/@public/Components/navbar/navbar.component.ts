import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@auth/Services/auth.service';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario;

  constructor(public authService: AuthService, public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
  this.usuario = JSON.parse(localStorage.getItem('usuario'));
  console.log(this.usuario);
  }

  darkmode(): any {
    this.darkmodeService.darkmode();
  }

}
