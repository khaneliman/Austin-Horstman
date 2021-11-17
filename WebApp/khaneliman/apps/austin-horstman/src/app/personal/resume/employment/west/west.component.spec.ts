import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestComponent } from './west.component';

describe('WestComponent', () => {
  let component: WestComponent;
  let fixture: ComponentFixture<WestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
