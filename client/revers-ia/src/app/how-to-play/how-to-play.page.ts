import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.page.html',
  styleUrls: ['./how-to-play.page.scss'],
})
export class HowToPlayPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

    
  goHome() {
    this.router.navigate(['/dashboard']);
  }

}
