import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set("Carrito");
  }

}
