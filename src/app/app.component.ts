import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'corpex-client';

  storedTheme: string = localStorage.getItem('theme-color');

  constructor() { }

  ngOnInit(): void {
  }
}
