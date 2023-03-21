import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();

  constructor(private router: Router) {}

  register() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }


  volverLogin(){
    this.router.navigate(['/login']);
  }

}
