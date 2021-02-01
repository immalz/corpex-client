import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/@shared/Services/darkmode.service';
import Swal from 'sweetalert2';
import { ProductoService } from '../../Services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto;

  constructor(
    private productoService: ProductoService,
    public darkmodeService: DarkmodeService,
    ) { }

  ngOnInit(): void {
    this.producto = JSON.parse(localStorage.getItem('producto'));
  }


  comprar(producto): any {
   Swal.fire(
      'Excelente!',
      `El producto ${producto.nombre} se ha añadido al carrito!`,
      'success'
    );
  }
}
