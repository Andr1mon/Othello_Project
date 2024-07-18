import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-ai-difficulty-vs-ai-first',
  templateUrl: './choose-ai-difficulty-vs-ai-first.page.html',
  styleUrls: ['./choose-ai-difficulty-vs-ai-first.page.scss'],
})
export class ChooseAiDifficultyVsAiFirstPage implements OnInit {
    constructor(private router: Router) {}
  
    ngOnInit() {}
    
    goHome() {
      this.router.navigate(['/dashboard']);
    }
    GoToChooseSecondAIDifficultyVSPlayer(firstAIDifficulty: string) {
      this.router.navigate(['/choose-ai-difficulty-vs-ai-second', {firstAIDifficulty}]);
    }
  }
  