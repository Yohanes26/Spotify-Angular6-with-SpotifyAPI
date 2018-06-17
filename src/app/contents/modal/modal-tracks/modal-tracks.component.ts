import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Album } from '../../artist/album.model';
import { MatTableDataSource } from '@angular/material';
import { Track } from '../../album/tracks.model';

@Component({
  selector: 'app-modal-tracks',
  templateUrl: './modal-tracks.component.html',
  styleUrls: ['./modal-tracks.component.css']
})
export class ModalTracksComponent implements OnInit {

  displayedColumns = ['name', 'artist', 'preview'];
  habilitarModal = true;
  dataSource;
  @Input() tracks: Track[] = [];

  constructor() { }

  ngOnInit() {
    this.popularTable();
  }

  emitirClose() {
    this.habilitarModal = false;
  }

  popularTable() {
    this.dataSource = new MatTableDataSource<Track>(this.tracks);
  }

}
