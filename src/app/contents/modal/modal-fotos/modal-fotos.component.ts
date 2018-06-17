import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal-fotos',
  templateUrl: './modal-fotos.component.html',
  styleUrls: ['./modal-fotos.component.css']
})
export class ModalFotosComponent implements OnInit, OnChanges {
  habilitarModal = true;
  @Input() imagemModal;
  constructor() { }

  ngOnInit() {
    this.habilitarModal = true;
  }

  ngOnChanges() {
    this.habilitarModal = true;
  }

  emitirClose() {
    this.habilitarModal = false;
  }

}
