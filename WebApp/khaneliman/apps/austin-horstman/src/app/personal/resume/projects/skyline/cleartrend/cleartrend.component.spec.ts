import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleartrendComponent } from './cleartrend.component';

describe('CleartrendComponent', () => {
  let component: CleartrendComponent;
  let fixture: ComponentFixture<CleartrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleartrendComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleartrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
