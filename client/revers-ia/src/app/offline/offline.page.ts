import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OfflinePage implements OnInit {
  cells: number[][] = []; // les cellules sans les mouvements legaux
  cells_moves: number[][] = []; // les cellules avec les mouvements legaux
  private moveMadeSubscription: Subscription = new Subscription();
  player1Score: number = 0;
  player2Score: number = 0;
  activePlayer: number = -1; // Par défaut, le joueur -1 est actif

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertController: AlertController  ) {}

  ngOnInit() {
    // Initialize the board and subscribe to move events
    this.apiService.getBoard().subscribe(
      (board) => {
        this.cells = board;
        this.cells_moves = JSON.parse(JSON.stringify(this.cells));
        this.apiService.getPossibleMoves().subscribe(
          (possibleMoves) => {
            for(let coordinates of possibleMoves)
              this.cells_moves[coordinates[0]][coordinates[1]] = 2;
          },
          (error) => {
            console.error('Error fetching board:', error);
          }
        );
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
            this.cells = board;
            this.cells_moves = JSON.parse(JSON.stringify(this.cells));
            this.apiService.getPossibleMoves().subscribe( // recuperer mouvements legaux
              (possibleMoves) => {
                for(let coordinates of possibleMoves)
                  this.cells_moves[coordinates[0]][coordinates[1]] = 2;   
              },
              (error) => {
                console.error('Error fetching board:', error);
              }
            );
            this.updateScores(); // renouvelle score
            this.toggleTurn(); // Change the turn after each move
            //localStorage.setItem('reversi_board', JSON.stringify(board));
        }
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

  makeMove(row: number, col: number) {
    if (this.cells_moves[row][col] === 2){
      this.apiService.makeMove(row, col).subscribe(
        (response) => {
          const winner = response.winner;
          if (winner)
            this.displayWinnerMessage(winner);
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


