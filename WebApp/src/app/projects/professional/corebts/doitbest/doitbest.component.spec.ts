import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DoItBestComponent } from './doitbest.component';

describe('DoItBestComponent', () => {
  let component: DoItBestComponent;
  let fixture: ComponentFixture<DoItBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoItBestComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoItBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
