import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArtistaComponent } from './modal-artista.component';

describe('ModalArtistaComponent', () => {
  let component: ModalArtistaComponent;
  let fixture: ComponentFixture<ModalArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
