import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';
import { categoriasService } from '../../core/services/categorias-service';
import { Categoria } from '../../interfaces/categoria';
import { TarjetaCategoria } from '../../core/components/tarjeta-categoria/tarjeta-categoria';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [TarjetaCategoria, CommonModule, RouterLink, RouterModule]
})
export class Home implements OnInit, OnDestroy {
  headerService = inject(HeaderService);
  categoriasService = inject(categoriasService);
  categorias:Categoria[] = [];
  
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
    this.headerService.extendido.set(true);
    this.categoriasService.getAll().then((res): Categoria[] => this.categorias = res)
  }
  
  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }



}
