import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorebtsComponent } from './corebts.component';

describe('CorebtsComponent', () => {
  let component: CorebtsComponent;
  let fixture: ComponentFixture<CorebtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorebtsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
