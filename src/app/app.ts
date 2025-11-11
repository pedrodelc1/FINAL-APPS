import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Tabs } from "./core/components/tabs/tabs";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('final-restaurante');
}
