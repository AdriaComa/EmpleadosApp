import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpleadosApp';

  constructor(private router: Router) {
    // Redirigir a la página de inicio de sesión si la URL no coincide con ninguna ruta
  }
}
