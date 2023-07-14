import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenaissanceLearningComponent } from './renaissance-learning.component';

describe('RenaissanceLearningComponent', () => {
  let component: RenaissanceLearningComponent;
  let fixture: ComponentFixture<RenaissanceLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenaissanceLearningComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenaissanceLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
