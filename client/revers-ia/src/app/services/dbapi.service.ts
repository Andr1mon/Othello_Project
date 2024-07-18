import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbapiService {
  private apiUrl = 'https://revers-ia.000webhostapp.com/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}login.php`, { email, password });
  }

  signUp(username: string, email: string, password: string, country: string) {
    return this.http.post<any>(`${this.apiUrl}signup.php`, { username, email, password, country });
  }

  getUserInfoFromSession(token: string) {
    return this.http.post<any>(`${this.apiUrl}getUserInfoFromSession.php`, { token });
  }
}
