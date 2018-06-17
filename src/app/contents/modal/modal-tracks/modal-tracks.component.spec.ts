import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTracksComponent } from './modal-tracks.component';

describe('ModalTracksComponent', () => {
  let component: ModalTracksComponent;
  let fixture: ComponentFixture<ModalTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
