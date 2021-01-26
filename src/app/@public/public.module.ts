import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

// componentes
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { ColaboradoresComponent } from './Pages/colaboradores/colaboradores.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    ProductosComponent,
    ServiciosComponent,
    ColaboradoresComponent,
    PerfilComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PublicModule { }
