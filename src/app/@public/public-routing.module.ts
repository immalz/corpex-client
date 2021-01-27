import { InicioComponent } from './Pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';
import { NoisponibleComponent } from './Pages/no-disponible/no-disponible.component';
import { PagesComponent } from './Pages/pages.component';
import { ProductosComponent } from './Pages/productos/productos.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'productos', component:  ProductosComponent},

    ]
  },
  {
    path: '**', component: NoisponibleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
