import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../layout/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  pesquisaInput;
  tipoSelecionado;
  artista;

  uriGetArtists = 'https://api.spotify.com/v1/search?';
  uriGetAlbumsArtists = 'https://api.spotify.com/v1/artists';

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getArtists() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.getToken()}`);
    return this.http.get<any>(`${this.uriGetArtists}q=${this.pesquisaInput}&type=${this.tipoSelecionado}`, {headers: headers});
  }

  getAlbumsArtist(artistaId) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.loginService.getToken()}`);
    return this.http.get<any>(`${this.uriGetAlbumsArtists}/${artistaId}/albums?limit=5`, { headers: headers });
  }

}
