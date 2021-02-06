import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';
import { JsonService } from '../../Services/json.service';
import { ProductoService } from '../../Services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos;

  constructor(
    public darkmodeService: DarkmodeService,
    private jsonService: JsonService,
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jsonService.getJson('assets/json/productos.json')
      .subscribe(
        res => { this.productos = res; },
        err => { console.log(err); }
      );
  }

  detalles(producto): any {
    localStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate([`/productos/${producto.nombre}`]);
  }
}
