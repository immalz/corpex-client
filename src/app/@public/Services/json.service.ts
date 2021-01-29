import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line: typedef
  getJson(url: string) {
    return this.http.get(url);
  }
}
