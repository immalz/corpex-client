import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { User } from './../../@public/Interfaces/user';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserFound;
  private URL = environment.URL + 'auth';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User): any {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: User): any {
    return this.http.post<any>(this.URL + '/signin', user);
  }
}
