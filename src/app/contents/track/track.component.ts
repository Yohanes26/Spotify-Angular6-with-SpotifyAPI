import { Component, OnInit } from '@angular/core';
import { TrackService } from './track.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

export interface Track {
  images: any[];
  artistName: String;
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  displayedColumns = ['image', 'name', 'artists', 'album', 'duration'];
  dataSource;

  tracks: Track[] = [];

  imagemModal;
  habilitarModalFoto;

  constructor(private trackService: TrackService,
              private router: Router) { }

  ngOnInit() {
    this.verificarRota();
  }

  chamarService() {
    this.trackService.getTracks().subscribe((res) => {
      console.log(res);
      this.tracks = res.tracks.items;
      for (const track of this.tracks) {
        track.artistName = '';
        for (const artist of track['artists']) {
          track.artistName += artist.name + ', ';
        }
        track.artistName.slice((track.artistName.length - 2), track.artistName.length);
      }
      this.popularTable();
    }, (err) => {
      this.router.navigate(['']);
    });
  }

  verificarRota() {
    if (this.trackService.tipoSelecionado !== 'track') {
      this.router.navigate(['/home/apresentacao']);
    } else {
      this.chamarService();
    }
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

  popularTable() {
    this.dataSource = new MatTableDataSource<Track>(this.tracks);
  }

}
