import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MenuOptionsComponent } from "./components/menu-options/menu-options.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MenuOptionsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Challenge';
}
