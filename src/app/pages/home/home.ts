import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
    this.headerService.extendido.set(true);
  }
  
  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }



}
