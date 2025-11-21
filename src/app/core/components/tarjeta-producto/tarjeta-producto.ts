import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { Categoria } from '../../../interfaces/categoria';
import { Producto } from '../../../interfaces/productos';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.scss',
  standalone: true,
  imports: [CommonModule],
})
export class TarjetaProducto {
  @Input({required:true}) producto!:Producto;
}
