import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ExpressScriptsComponent } from './express-scripts.component';

describe('ExpressScriptsComponent', () => {
  let component: ExpressScriptsComponent;
  let fixture: ComponentFixture<ExpressScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressScriptsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
