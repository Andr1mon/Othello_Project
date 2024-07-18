import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-ai-difficulty-vs-ai-second',
  templateUrl: './choose-ai-difficulty-vs-ai-second.page.html',
  styleUrls: ['./choose-ai-difficulty-vs-ai-second.page.scss'],
})
export class ChooseAiDifficultyVsAiSecondPage implements OnInit {
  firstAIDifficulty: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.firstAIDifficulty = params['firstAIDifficulty'];
    })
  }
  goHome() {
    this.router.navigate(['/dashboard']);
  }
  goToAIVsAIPage(firstAIDifficulty: string, secondAIDifficulty: string) {
    this.router.navigate(['/ai-vs-ai', {firstAIDifficulty, secondAIDifficulty}]); // Remplace '/player-vs-ai' par le chemin de ta page "player-vs-ai"
  }
}