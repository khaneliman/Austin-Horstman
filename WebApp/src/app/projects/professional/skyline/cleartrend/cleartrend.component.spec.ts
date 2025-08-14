import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CleartrendComponent } from './cleartrend.component';

describe('CleartrendComponent', () => {
  let component: CleartrendComponent;
  let fixture: ComponentFixture<CleartrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleartrendComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
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
