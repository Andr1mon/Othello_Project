
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbapiService } from '../services/dbapi.service';
import { CountryService } from '../country.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  countries: any[] = [];
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  country: string = '';


  constructor(private router: Router, private dbapiService: DbapiService, private countryService: CountryService, private http: HttpClient) { }


  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.map((country) => ({
        name: country.name.common, // Adaptez cette ligne si la structure de données de l'API change
        code: country.cca2
      })).sort((a, b) => a.name.localeCompare(b.name));
    });
  }


  signUp() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post<string>('https://revers-ia.000webhostapp.com/signup.php', { username: this.username, email: this.email, password: this.password, country: this.country }, { headers, responseType: 'text' as 'json' })
      .subscribe(response => {
        if (response.trim() === 'Signup successful') {
          this.router.navigate(['/login']);
        } else {
          console.error('Signup error:', response);
        }
      });
  }
}
