import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  CLIENT_ID = '4203e0e2756a4135b19e28860089dc44';
  REDIRECT_URI = 'https://desafiospotify.herokuapp.com/home';

  constructor(private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    return this.getToken();
  }

  fazerLogin() {
    const scopes = 'user-read-private user-read-email user-library-read user-library-modify';
    window.location.href = ('https://accounts.spotify.com/authorize/?'
      + 'client_id=' + this.CLIENT_ID
      + '&response_type=token'
      + '&redirect_uri=' + this.REDIRECT_URI
      + '&scope=' + scopes);
  }
}
