import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router) { }

  login() {
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }

  signup() {
    // Rediriger vers la page d'inscription
    this.router.navigate(['/signup']);
  }
}
