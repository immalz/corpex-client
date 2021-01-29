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
import { SeoSemComponent } from './Pages/servicios/seo-sem/seo-sem.component';
import { TodosComponent } from './Pages/servicios/todos/todos.component';
import { MarketingComponent } from './Pages/servicios/marketing/marketing.component';
import { SocialesComponent } from './Pages/servicios/sociales/sociales.component';
import { ColaboradoresComponent } from './Pages/colaboradores/colaboradores.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent},
      { path: 'nosotros/colaboradores', component: ColaboradoresComponent },
      {
        path: 'servicios',
        component: ServiciosComponent,
        children: [
          {path: '', component: TodosComponent},
          {path: 'seo-sem', component: SeoSemComponent},
          {path: 'marketing-digital', component: MarketingComponent},
          {path: 'medios-sociales', component: SocialesComponent},
        ]
      },
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
