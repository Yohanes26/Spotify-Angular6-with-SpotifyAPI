import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {
  traduzir = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.verificarToken();
  }

  verificarToken() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  mudarTraducao() {
    this.traduzir = !this.traduzir;
  }

}
