import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrogerComponent } from './kroger.component';

describe('KrogerComponent', () => {
  let component: KrogerComponent;
  let fixture: ComponentFixture<KrogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KrogerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
