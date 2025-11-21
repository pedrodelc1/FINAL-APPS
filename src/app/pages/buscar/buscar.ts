import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.html',
  styleUrl: './buscar.scss',
})
export class Buscar {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set("Buscar");
  }

}
