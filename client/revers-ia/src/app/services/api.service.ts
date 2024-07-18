import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private apiUrl =  'https://project-84kz.onrender.com' // 'https://localhost:5000' //'https://fictional-rotary-phone-xg9x69vvr6jfgr-5000.app.github.dev/'////'https://project-2g6w.onrender.com'; // online

  

  // Subject to notify subscribers when a move is made
  private moveSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getBoard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_board`).pipe(
    );
  }

  reload(): Observable<any> {
    // Make the move and notify subscribers
    return this.http.post<any>(`${this.apiUrl}/reload`, {}).pipe(
      tap(() => {
        this.moveSubject.next();
      })
    );
  }

  getPossibleMoves(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_possible_moves`).pipe(
    );
  }

  makeMove(row: number, col: number): Observable<any> {
    // Make the move and notify subscribers
    return this.http.post<any>(`${this.apiUrl}/make_move`, { row, col }).pipe(
      tap(() => {
        this.moveSubject.next();
      })
    );
  }

  makeOneMoveAiVsAI(firstAIDifficulty : string, secondAIDifficulty : string): Observable<any> {
    // Make the move and notify subscribers
    return this.http.post<any>(`${this.apiUrl}/make_one_move_ai_vs_ai`, { firstAIDifficulty, secondAIDifficulty }).pipe(
      tap(() => {
        this.moveSubject.next();
      })
    );
  }

  makeOneMove(playerDisc: string, difficulty: string, row: number, col: number): Observable<any> {
    // Make the move and notify subscribers
    return this.http.post<any>(`${this.apiUrl}/make_one_move`, { playerDisc, difficulty, row, col }).pipe(
      tap(() => {
        this.moveSubject.next();
      })
    );
  }

  // Expose the observable for subscribing to move events
  onMoveMade(): Observable<void> {
    return this.moveSubject.asObservable();
  }

}
