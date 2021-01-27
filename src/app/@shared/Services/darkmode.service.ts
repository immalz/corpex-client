import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  storedTheme: string = localStorage.getItem('theme-color');

  constructor() { }

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
