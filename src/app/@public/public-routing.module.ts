import { InicioComponent } from './Pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';

const routes: Routes = [
      {path: 'inicio', component: InicioComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'servicios', component: ServiciosComponent},
      {path: 'contacto', component: ContactoComponent},
      {
        path: '', pathMatch: 'full', redirectTo: 'inicio'
      },
      {
        path: '**', pathMatch: 'full', redirectTo: 'inicio'
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
