import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Album } from '../../artist/album.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-modal-artista',
  templateUrl: './modal-artista.component.html',
  styleUrls: ['./modal-artista.component.css']
})
export class ModalArtistaComponent implements OnInit {
  displayedColumns = ['image', 'name'];
  habilitarModal = true;
  dataSource;
  @Input() albuns: Album[] = [];
  constructor() { }

  ngOnInit() {
    this.popularTable();
  }

  emitirClose() {
    this.habilitarModal = false;
  }

  popularTable() {
    this.dataSource = new MatTableDataSource<Album>(this.albuns);
  }

  verificarLength(images: any[]) {
    if (images.length >= 1) {
      return images[0].url;
    }
    return '../../../assets/foto-indisponivel.png';
  }

}
