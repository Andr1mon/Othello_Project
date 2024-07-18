import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-vs-ai',
  templateUrl: './player-vs-ai.page.html',
  styleUrls: ['./player-vs-ai.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlayerVsAiPage implements OnInit {
  cells: number[][] = [];
  cells_moves: number[][] = [];
  private moveMadeSubscription: Subscription = new Subscription();
  player1Score: number = 0;
  player2Score: number = 0;
  activePlayer: number = -1; // Par défaut, le joueur -1 est actif
  difficulty: string = '';
  playerDisc: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Difficulty chosen at choose-ai-difficulty-vs-player.page
    this.route.params.subscribe(params => {
      this.difficulty = params['difficulty'];
    })
    // Disc
    this.route.params.subscribe(params => {
      this.playerDisc = params['playerDisc'];
    })
    this.apiService.getBoard().subscribe(
      (board) => {
        this.cells = board;
        this.cells_moves = JSON.parse(JSON.stringify(this.cells));
        this.updateScores();
      },
      (error) => {
        console.error('Error fetching board:', error);
      }
    );
    
    this.moveMadeSubscription = this.apiService.onMoveMade().subscribe(() => {
      this.apiService.getBoard().subscribe(
        (board) => {
          if (JSON.stringify(this.cells) !== JSON.stringify(board)){
            this.toggleTurn(); // Change the turn after each move
          }
          this.cells = board;
          this.cells_moves = JSON.parse(JSON.stringify(this.cells));
          this.updateScores();
          if ((this.playerDisc === 'Black' && this.activePlayer === -1) || (this.playerDisc === 'White' && this.activePlayer === 1)){
            this.apiService.getPossibleMoves().subscribe(
              (possibleMoves) => {
                for(let coordinates of possibleMoves)
                  this.cells_moves[coordinates[0]][coordinates[1]] = 2;   
              },
              (error) => {
                console.error('Error fetching board:', error);
              }
            );
          }
          //localStorage.setItem('reversi_board', JSON.stringify(board));
        },
        (error) => {
          console.error('Error fetching board:', error);
        }
      );
      
    });

  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.moveMadeSubscription) {
      this.moveMadeSubscription.unsubscribe();
    }
  }

  makeOneMove(playerDisc: string, difficulty: string, row: number, col: number) {
    if (!(row == -1 && ((this.activePlayer === -1 && playerDisc == "Black") || ((this.activePlayer == 1 && playerDisc == "White"))))) {
    // if sert a eviter des appels excessifs au serveur
      this.apiService.makeOneMove(playerDisc, difficulty, row, col).subscribe(
        (response) => {
          const winner = response.winner;
          if (winner) {
            this.displayWinnerMessage(winner);
          } else {
            // Continue with the game logic if there is no winner
            this.apiService.getBoard().subscribe(
              (board) => {
                this.cells = board;
                this.updateScores();
                if ((this.playerDisc === 'Black' && this.activePlayer === -1) || (this.playerDisc === 'White' && this.activePlayer === 1)){
                  this.apiService.getPossibleMoves().subscribe(
                    (possibleMoves) => {
                      for(let coordinates of possibleMoves)
                        this.cells_moves[coordinates[0]][coordinates[1]] = 2;   
                    },
                    (error) => {
                      console.error('Error fetching board:', error);
                    }
                  );
                }
                //localStorage.setItem('reversi_board', JSON.stringify(board));
              },
              (error) => {
                console.error('Error fetching board:', error);
              }
            );
          }
        },
        (error) => {
          // Handle errors here
          console.error('Error making move:', error);
        }
      );
    }
  }

  updateScores() {
    this.player1Score = this.countPieces(-1);
    this.player2Score = this.countPieces(1);
  }

  countPieces(player: number): number {
    return this.cells.reduce((count, row) => count + row.filter((cell) => cell === player).length, 0);
  }

  toggleTurn() {
    // Changer le joueur actif
    this.activePlayer *= -1;
  }

  displayWinnerMessage(winner: string) {
    this.alertController.create({
      header: 'Game Over',
      message: `The winner is ${winner === 'Black' ? 'Player 1 (Black)' : 'Player 2 (White)'}`,
      buttons: [
        {
          text: 'Play Again',
          handler: () => {
            this.apiService.reload().subscribe(
              (error) => {
                // Handle errors here
                console.error('Error making move:', error);
              }
            );
            location.reload();
          },
        },
      ],
    }).then((alert) => alert.present());
    console.log(winner);
  }

  getImagePath(cell: number): string {
    if (cell === -1) {
      return "../../assets/stone_black.svg";
    }
    if (cell === 1) {
      return "../../assets/stone_white.svg";
    }
    if (cell === 2) {
      return "../../assets/stone_hint.svg";
    }
    return '';
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  reload() {
    // toggle will be activated so initial state is -1 as expected
    this.cells = [];
    this.activePlayer = 1; 
    this.apiService.reload().subscribe(
      (error) => {
        // Handle errors here
        console.error('Error making move:', error);
      }
    );
  }
  
}

