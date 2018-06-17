import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AlbumComponent } from './contents/album/album.component';
import { TrackComponent } from './contents/track/track.component';
import { ArtistComponent } from './contents/artist/artist.component';
import { LoginComponent } from './layout/login/login.component';
import { ApresentacaoComponent } from './contents/apresentacao/apresentacao.component';

const routes: Routes = [
    { path: '/', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'tracks', component: TrackComponent },
            { path: 'artists', component: ArtistComponent },
            { path: 'albums', component: AlbumComponent },
            { path: 'apresentacao', component: ApresentacaoComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
