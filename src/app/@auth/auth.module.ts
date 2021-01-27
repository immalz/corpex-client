import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../@shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componentes
import { LoginComponent } from './Pages/login/login.component';
import { PagesComponent } from './Pages/pages.component';


@NgModule({
  declarations: [LoginComponent, PagesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [LoginComponent, PagesComponent]
})
export class AuthModule { }
