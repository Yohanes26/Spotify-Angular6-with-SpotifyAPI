import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
      const keyValuePairs = window.location.toString();
      if (keyValuePairs.includes('=')) {
        const values = keyValuePairs.split('=');
        const valorFinal = values[1].split('&');
        localStorage.setItem('token', valorFinal[0]);
      }
      setTimeout(() => {
        this.router.navigate(['/home/apresentacao']);
      }, 2000);
  }
}
