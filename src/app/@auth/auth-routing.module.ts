import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { LoginComponent } from './Pages/login/login.component';
import { PagesComponent } from './Pages/pages.component';

const routes: Routes = [
  {
    path: 'acceder', component: PagesComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
