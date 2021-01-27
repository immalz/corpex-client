import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@auth/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario;
  storedTheme: string = localStorage.getItem('theme-color');

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  this.usuario = JSON.parse(localStorage.getItem('usuario'));
  console.log(this.usuario);
  }

  darkmode(): any {
    if (this.storedTheme === 'theme-dark') {

      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');

    } else {

      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');

    }
  }

}
