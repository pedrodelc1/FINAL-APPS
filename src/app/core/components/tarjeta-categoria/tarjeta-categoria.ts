import { Component, Input } from '@angular/core';
import { Categoria } from '../../../interfaces/categoria';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.html',
  styleUrl: './tarjeta-categoria.scss',
  standalone: true,
  imports: [NgStyle]
})
export class TarjetaCategoria {

  @Input({ required: true }) categoria!: Categoria;

}
