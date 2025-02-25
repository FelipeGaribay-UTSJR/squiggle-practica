import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from './pages/app-menu/app-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-baseball';
}
