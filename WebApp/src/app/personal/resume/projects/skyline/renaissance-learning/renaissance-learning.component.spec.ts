import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RenaissanceLearningComponent } from './renaissance-learning.component';

describe('RenaissanceLearningComponent', () => {
  let component: RenaissanceLearningComponent;
  let fixture: ComponentFixture<RenaissanceLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenaissanceLearningComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
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
