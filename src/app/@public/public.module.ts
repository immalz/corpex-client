import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NoisponibleComponent } from './Pages/no-disponible/no-disponible.component';
import { PagesComponent } from './Pages/pages.component';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../@auth/auth.module';
import { SharedModule } from '../@shared/shared.module';
import { SeoSemComponent } from './Pages/servicios/seo-sem/seo-sem.component';
import { MarketingComponent } from './Pages/servicios/marketing/marketing.component';
import { SocialesComponent } from './Pages/servicios/sociales/sociales.component';
import { TodosComponent } from './Pages/servicios/todos/todos.component';


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
    FooterComponent,
    NoisponibleComponent,
    PagesComponent,
    SeoSemComponent,
    MarketingComponent,
    SocialesComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    AuthModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PublicModule { }
