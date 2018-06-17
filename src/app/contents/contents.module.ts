import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { AlbumService } from './album/album.service';
import { ArtistService } from './artist/artist.service';
import { TrackService } from './track/track.service';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalFotosComponent } from './modal/modal-fotos/modal-fotos.component';
import { ModalArtistaComponent } from './modal/modal-artista/modal-artista.component';
import { ModalTracksComponent } from './modal/modal-tracks/modal-tracks.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    Angular2FontawesomeModule
  ],
  declarations: [
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    ModalFotosComponent,
    ModalArtistaComponent,
    ModalTracksComponent,
    ApresentacaoComponent
  ],
  providers: [
    AlbumService,
    ArtistService,
    TrackService,
    ModalFotosComponent,
    ModalArtistaComponent,
    ModalTracksComponent
  ]
})
export class ContentsModule { }
