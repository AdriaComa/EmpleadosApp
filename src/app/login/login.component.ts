import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


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

  register(){
    this.router.navigate(['/register']);
  }

}

