import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {

  constructor( private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log("EVENTO" ,event)
        switch (event.urlAfterRedirects){
          case "/":
             this.seleccionado = [true,false,false,false];
             break;
          case "/Carrito":
             this.seleccionado = [false,false,true,false];
             break;
          case "/Perfil":
             this.seleccionado = [false,false,false,true];
             break;
          case "/Buscar":
             this.seleccionado = [false,true,false,false];
             break;
          default:
             this.seleccionado = [false,false,false,false];
             break;
        }
      }
    })
  }

  seleccionado = [false,false,false,false];
  colorDesactivado = "#555555";
  colorActivado = "#FFFFFF"

  navegar(direccion:string){
    //alternar pagina
    this.router.navigate([direccion])
    console.log(direccion)
  }
}