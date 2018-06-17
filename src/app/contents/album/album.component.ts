import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AlbumService } from './album.service';
import { Track } from './tracks.model';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

export interface Album {
  images: any[];
  name: String;
  artists: String;
  artist: String;
  availability: number;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  // Json do usuario logado para iterar o album e setar o icone na table
  meusAlbuns: any;

  // Referencia de colunas
  displayedColumns = ['image', 'name', 'artists', 'icon'];

  // Valores a ser injetados nas linhas
  dataSource;

  // Variaveis utilizadas nos modais
  imagemModal;
  habilitarModalFoto;
  habilitarModalTracks;

  // Model de Álbum
  albums: Album[] = [];

  // Model de músicas
  tracks: Track[] = [];

  constructor(private albumService: AlbumService,
              private router: Router) { }

  ngOnInit() {
    this.verificarRota();
    this.armazenarJsonMeusAlbuns();
  }

  chamarService() {
    this.albumService.getAlbums().subscribe((res) => {
      this.albums = res.albums.items;
      this.verificarQuantidadeArtistas();
      this.popularTable();
    }, (err) => {
      this.router.navigate(['']);
    });
  }

  verificarRota() {
    if (this.albumService.tipoSelecionado !== 'album') {
      this.router.navigate(['/home/apresentacao']);
    } else {
      this.chamarService();
    }
  }

  armazenarJsonMeusAlbuns() {
    this.albumService.getJsonMeusAlbuns().subscribe((res) => {
      this.meusAlbuns = res.items;
    });
  }

  verificarQuantidadeArtistas() {
    for (const album of this.albums) {
      if (album.artists.length > 1) {
        album.artist = 'Various Artists';
      } else {
        album.artist = album.artists[0]['name'];
      }
    }
  }

  verificarLength(images: any[]) {
    if (images.length >= 1) {
      return images[0].url;
    }
    return '../../../assets/foto-indisponivel.png';
  }

  popularTable() {
    this.dataSource = new MatTableDataSource<Album>(this.albums);
  }

  habilitarModal(images: any[]) {
    if (images.length >= 1) {
      this.imagemModal = images[0].url;
    } else {
      this.imagemModal = '../../../assets/foto-indisponivel.png';
    }
    this.habilitarModalFoto = false;
    this.habilitarModalFoto = true;
  }

  habilitarModalTrack(albumId) {
    this.habilitarModalTracks = false;
    this.albumService.getTracks(albumId).subscribe((res) => {
      this.habilitarModalTracks = true;
      this.tracks = [];
      for (const track of res.items) {
        const trackAux: Track = new Track();
        trackAux.artist = track.artists[0].name;
        trackAux.name = track.name;
        trackAux.preview_url = track.preview_url;
        this.tracks.push(trackAux);
      }
    });
  }

  retornarImagem(idAlbum) {
    this.meusAlbuns.map((album) => {
      if (idAlbum === album.album.id) {
        return 'star';
      }
    });
    return 'thumbs-up';
  }

  favoritar(idAlbum) {
    this.meusAlbuns.map((album) => {
      if (idAlbum === album.album.id) {
        this.albumService.deleteAlbum(idAlbum).subscribe((res) => {
          this.router.navigate(['/home/apresentacao']);
          this.router.navigate(['/home/albums']);
        });
      }
    });

    this.albumService.putAlbum(idAlbum).subscribe((res) => {
      this.router.navigate(['/home/apresentacao']);
      this.router.navigate(['/home/albums']);
    });
    }

}
