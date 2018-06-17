import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public uriGetMeUser = 'https://api.spotify.com/v1/me';

  constructor(private http: HttpClient,
    private loginService: LoginService) { }

  getMe() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get(this.uriGetMeUser, {headers: headers});
  }
}
