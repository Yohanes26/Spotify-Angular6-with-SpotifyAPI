import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../layout/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  pesquisaInput;
  tipoSelecionado;

  uriGetTracks = 'https://api.spotify.com/v1/search?';

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getTracks() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.getToken()}`);
    return this.http.get<any>(`${this.uriGetTracks}q=${this.pesquisaInput}&type=${this.tipoSelecionado}`, { headers: headers });
  }
}
