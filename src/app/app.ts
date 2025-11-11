import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Tabs } from "./core/components/tabs/tabs";
import { Header } from "./core/components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, Tabs, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('final-restaurante');
}
