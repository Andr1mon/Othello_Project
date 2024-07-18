import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})

export class DashboardPage {

  constructor(private router: Router) {}

  // Méthode pour ouvrir le lien Google Forms dans un nouvel onglet
  openGoogleForms() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfbnBLbptJmAdKuu2ATcRfw2PNSvFUD6mSYXi6MeKrhn6KlRQ/viewform?usp=sf_link', '_blank');
  }

  // Autres méthodes pour les différentes redirections

  goToOfflinePage() {
    this.router.navigate(['/offline']); 
  }

  GoToChoosePlayerDisc() {
    this.router.navigate(['/choose-disc']);
  }

  goToChooseAIDifficultyVSAIFirst() {
    this.router.navigate(['/choose-ai-difficulty-vs-ai-first']); 
  }

  goToHowToPlay() {
    this.router.navigate(['/how-to-play']); 
  }

  openProfile() {
    this.router.navigate(['/profile']); 
  }
}
