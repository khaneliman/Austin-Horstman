import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTrackerComponent } from './stat-tracker.component';

describe('StatTrackerComponent', () => {
  let component: StatTrackerComponent;
  let fixture: ComponentFixture<StatTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
