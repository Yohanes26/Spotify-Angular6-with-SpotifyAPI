import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../contents/album/album.service';
import { TrackService } from '../../contents/track/track.service';
import { ArtistService } from '../../contents/artist/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  tipoPesquisa: any = [];
  pesquisaInput: String = null;
  tipoSelecionado = null;
  habilitarButton = false;
  esconderOption = true;
  habilitarErro = false;

  constructor(
    private albumService: AlbumService,
    private trackService: TrackService,
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoPesquisa = [
      { value: 'track', viewValue: 'Música' },
      { value: 'artist', viewValue: 'Artista' },
      { value: 'album', viewValue: 'Albuns' }
    ];
  }

  verificarButton(event) {
    this.pesquisaInput = event;
    if (this.tipoSelecionado !== null
      && this.pesquisaInput !== ''
      && this.pesquisaInput !== null
    ) {
      this.habilitarButton = true;
    } else {
      this.habilitarButton = false;
    }
  }

  atribuirTipo(event) {
    this.tipoSelecionado = event;
    this.verificarButton(this.pesquisaInput);
  }

  buscar() {
    if (this.habilitarButton) {
      if (this.tipoSelecionado === 'track') {
        this.trackService.pesquisaInput = this.pesquisaInput;
        this.trackService.tipoSelecionado = this.tipoSelecionado;
        setTimeout(() => {
          this.router.navigate(['/home/tracks']);
        }, 1000);
      } else if (this.tipoSelecionado === 'artist') {
        this.artistService.pesquisaInput = this.pesquisaInput;
        this.artistService.tipoSelecionado = this.tipoSelecionado;
        setTimeout(() => {
          this.router.navigate(['/home/artists']);
        }, 1000);
      } else if (this.tipoSelecionado === 'album') {
        this.albumService.pesquisaInput = this.pesquisaInput;
        this.albumService.tipoSelecionado = this.tipoSelecionado;
        setTimeout(() => {
          this.router.navigate(['/home/albums']);
        }, 1000);
      }
    }
  }

}
