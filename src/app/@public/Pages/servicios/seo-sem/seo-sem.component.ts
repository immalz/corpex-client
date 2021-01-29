import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';

@Component({
  selector: 'app-seo-sem',
  templateUrl: './seo-sem.component.html',
  styleUrls: ['./seo-sem.component.css']
})
export class SeoSemComponent implements OnInit {


  constructor(public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
  }

}
