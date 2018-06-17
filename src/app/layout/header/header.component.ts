import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  souEu;
  constructor(private headerService: HeaderService,
              private router: Router) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
      this.headerService.getMe().subscribe((res) => {
        this.souEu = res['display_name'];
      }, (err) => {
        this.router.navigate(['']);
      });
  }

}
