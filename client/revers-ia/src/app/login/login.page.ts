import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbapiService } from '../services/dbapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private dbapiService: DbapiService) {}

  login() {
    this.dbapiService.login(this.email, this.password).subscribe(response => {
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/dashboard']);
      } else {
        console.error('Login error:', response);
      }
    });
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
