import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  headerService = inject(HeaderService);
  claseAplicada = signal("")
  tituloMostrado = signal("")

  esconderTitulo = effect(()=> {
    if(this.headerService.titulo()){
      this.claseAplicada.set("fade-out");
    }
  }, {allowSignalWrites:true})

  mostrarTituloNuevo(e:AnimationEvent){
    this.tituloMostrado.set(this.headerService.titulo());
    console.log(e)
    if(e.animationName.includes("fade-out"))
      this.claseAplicada.set("fade-in")
      setTimeout(() => {
        this.claseAplicada.set("")
        
      },150);
  }


}
