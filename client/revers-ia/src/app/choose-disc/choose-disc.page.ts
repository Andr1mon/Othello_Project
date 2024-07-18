import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-disc',
  templateUrl: './choose-disc.page.html',
  styleUrls: ['./choose-disc.page.scss'],
})
export class ChooseDiscPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['/dashboard']);
  }
  GoToChooseAIDifficultyVSPlayer(playerDisc: string) {
    this.router.navigate(['/choose-ai-difficulty-vs-player', {playerDisc}]);
  }
}
