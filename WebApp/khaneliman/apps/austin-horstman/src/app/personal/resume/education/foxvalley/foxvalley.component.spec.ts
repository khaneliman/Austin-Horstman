import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxvalleyComponent } from './foxvalley.component';

describe('FoxvalleyComponent', () => {
  let component: FoxvalleyComponent;
  let fixture: ComponentFixture<FoxvalleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoxvalleyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxvalleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
