import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Perfil');
  }

}
