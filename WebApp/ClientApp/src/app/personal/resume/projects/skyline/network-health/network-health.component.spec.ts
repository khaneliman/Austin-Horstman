import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkHealthComponent } from './network-health.component';

describe('NetworkHealthComponent', () => {
  let component: NetworkHealthComponent;
  let fixture: ComponentFixture<NetworkHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
