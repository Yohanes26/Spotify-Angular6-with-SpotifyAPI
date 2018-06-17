import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentsComponent } from './contents/contents.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header/header.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent, NavBarComponent, ContentsComponent, FooterComponent, LoginComponent, HomeComponent],
  exports: [
    HeaderComponent,
    NavBarComponent,
    ContentsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RouterModule
  ],
  providers: [LoginService, HttpClient, HeaderService]
})
export class LayoutModule { }
