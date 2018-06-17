import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ArtistService } from './artist.service';
import { AlbumComponent } from '../album/album.component';
import { Album } from './album.model';
import { Router } from '@angular/router';

export interface Artista {
  images: any[];
  name: String;
  genres: String;
  popularity: number;
  popularityString: String;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  displayedColumns = ['image', 'name', 'genres', 'popularity'];
  dataSource;

  // Lista de artistas
  artistas: Artista[] = [];
  albuns: Album[] = [];

  // Utilizados no modal para mostrar foto do artista em tamanho maior
  imagemModal;
  habilitarModalFoto;
  habilitarModalArtista;

  constructor(private artistService: ArtistService,
              private router: Router) { }

  ngOnInit() {
    this.verificarRota();
  }

  chamarService() {
    this.artistService.getArtists().subscribe((res) => {
      this.artistas = res.artists.items;
      this.converterPopularity();
      this.popularTable();
    }, (err) => {
      this.router.navigate(['']);
    });
  }

  verificarRota() {
    if (this.artistService.tipoSelecionado !== 'artist') {
      this.router.navigate(['/home/apresentacao']);
    } else {
      this.chamarService();
    }
  }

  popularTable() {
    this.dataSource = new MatTableDataSource<Artista>(this.artistas);
  }

  verificarLength(images: any[]) {
    if (images.length >= 1) {
      return images[0].url;
    }
    return '../../../assets/foto-indisponivel.png';
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

  converterPopularity() {
    this.artistas.map((artista) => {
      if (artista.popularity < 30) {
        artista.popularityString = 'Underground';
      } else if (artista.popularity >= 30
                && artista.popularity <= 59) {
        artista.popularityString = 'Regular';
      } else if (artista.popularity >= 60
                && artista.popularity <= 79) {
        artista.popularityString = 'Cool';
      } else if (artista.popularity >= 80) {
        artista.popularityString = 'Hot';
      }
    });
  }

  mostrarAlbuns(artistaId) {
    this.habilitarModalArtista = false;
    this.artistService.getAlbumsArtist(artistaId).subscribe((res) => {
      this.albuns = [];
      for (const album of res.items) {
        const albumAux = new Album();
        albumAux.images = album.images;
        albumAux.name = album.name;
        this.albuns.push(albumAux);
      }
      this.habilitarModalArtista = true;
    });
  }

}
