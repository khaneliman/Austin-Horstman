import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ItPortalComponent } from './it-portal.component';

describe('ItPortalComponent', () => {
  let component: ItPortalComponent;
  let fixture: ComponentFixture<ItPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItPortalComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
