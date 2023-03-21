import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInUser = users.find(
      (u: User) => u.usuario === this.user.usuario && u.password === this.user.password
    );
    if (loggedInUser) {
      localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }




  register(){
    this.router.navigate(['/register']);
  }

}

