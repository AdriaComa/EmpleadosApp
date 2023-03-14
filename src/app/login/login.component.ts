import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  nombre: string = '';
  correo: string = '';
  password2: string = '';
  registrado: boolean = false;

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      alert('Por favor ingrese el usuario y la contraseña');
      return;
    }

    //Falta validar USUARIOS
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  registrar() {
    if (this.nombre.trim() === '' || this.correo.trim() === '' || this.password2.trim() === '') {
      alert('Por favor ingrese todos los campos');
      return;
    }

    if (this.password2.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    //FALTA validar REGISTROS
    localStorage.setItem('usuarios', JSON.stringify([
      ...JSON.parse(localStorage.getItem('usuarios') || '[]'),
      {
        nombre: this.nombre,
        correo: this.correo,
        contrasena: this.password2
      }
    ]));

    alert('Usuario registrado exitosamente');
    this.nombre = '';
    this.correo = '';
    this.password2 = '';
  }
}

