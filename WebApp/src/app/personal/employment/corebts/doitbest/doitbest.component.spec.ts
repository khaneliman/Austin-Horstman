import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoItBestComponent } from './doitbest.component';

describe('DoItBestComponent', () => {
  let component: DoItBestComponent;
  let fixture: ComponentFixture<DoItBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoItBestComponent],
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
