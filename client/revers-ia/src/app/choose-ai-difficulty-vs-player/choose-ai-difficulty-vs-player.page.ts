import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-ai-difficulty-vs-player',
  templateUrl: './choose-ai-difficulty-vs-player.page.html',
  styleUrls: ['./choose-ai-difficulty-vs-player.page.scss'],
})
export class ChooseAiDifficultyVsPlayerPage implements OnInit {
  playerDisc: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerDisc = params['playerDisc'];
    })
  }
  goHome() {
    this.router.navigate(['/dashboard']);
  }
  goToPlayerVsAIPage(playerDisc: string, difficulty: string) {
    this.router.navigate(['/player-vs-ai', {playerDisc, difficulty}]); // Remplace '/player-vs-ai' par le chemin de ta page "player-vs-ai"
  }
}
