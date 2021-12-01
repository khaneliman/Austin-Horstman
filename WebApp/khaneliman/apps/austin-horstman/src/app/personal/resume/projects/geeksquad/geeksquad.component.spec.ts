import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GeeksquadComponent } from './geeksquad.component';

describe('GeeksquadComponent', () => {
  let component: GeeksquadComponent;
  let fixture: ComponentFixture<GeeksquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeeksquadComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeeksquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
