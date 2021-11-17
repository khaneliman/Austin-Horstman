import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MileOfMusicComponent } from './mile-of-music.component';

describe('MileOfMusicComponent', () => {
  let component: MileOfMusicComponent;
  let fixture: ComponentFixture<MileOfMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MileOfMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MileOfMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
