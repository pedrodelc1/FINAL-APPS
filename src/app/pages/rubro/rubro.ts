import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';
import { Productos } from '../../core/services/productos-service';
import { Producto } from '../../interfaces/productos';
import { ActivatedRoute } from '@angular/router';
import { TarjetaProducto } from '../../core/components/tarjeta-producto/tarjeta-producto';
import { CommonModule } from '@angular/common';
import { categoriasService } from '../../core/services/categorias-service';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.html',
  styleUrl: './rubro.scss',
  standalone: true,
  imports: [TarjetaProducto, CommonModule],
})
export class Rubro {
  headerService = inject(HeaderService);
  productosService = inject(Productos); 
  categoriaService = inject(categoriasService);
  ac = inject(ActivatedRoute);
  productos:Producto[] = [];

  ngOnInit(): void {
    this.ac.params.subscribe(params => {
      if(params['id']){
        this.categoriaService.getById(parseInt(params['id']))
        .then(categoria => {
          if (categoria) {
            this.productos = categoria?.productos
            this.headerService.titulo.set(categoria.nombre)
          }})
      }
    })
  }
}
