import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  esAdmin: boolean = false;

  constructor(private router: Router) {
    const usuarioActual = localStorage.getItem('usuarioActual');
    if (usuarioActual === 'admin') {
      this.esAdmin = true;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    this.router.navigate(['/login']);
  }

}
