import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
  }


}
