import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SkylineComponent } from './skyline.component';

describe('SkylineComponent', () => {
  let component: SkylineComponent;
  let fixture: ComponentFixture<SkylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkylineComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
