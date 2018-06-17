import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../layout/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  pesquisaInput;
  tipoSelecionado;

  uriGetAlbuns = 'https://api.spotify.com/v1/search?';
  uriGetTracks = 'https://api.spotify.com/v1/albums';
  uriGetMeusAlbuns = 'https://api.spotify.com/v1/me/albums?limit=50';

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getAlbums() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get<any>(`${this.uriGetAlbuns}q=${this.pesquisaInput}&type=${this.tipoSelecionado}`, {headers: headers});
  }

  getTracks(albumId) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get<any>(`${this.uriGetTracks}/${albumId}/tracks`, { headers: headers });
  }

  getJsonMeusAlbuns() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get<any>(this.uriGetMeusAlbuns, { headers: headers });
  }

  deleteAlbum(idAlbum) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get<any>(`${this.uriGetTracks}?ids=${idAlbum}`, { headers: headers });
  }

  putAlbum(idAlbum) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.isAuthenticated()}`);
    return this.http.get<any>(`${this.uriGetTracks}?ids=${idAlbum}`, { headers: headers });
  }
}
