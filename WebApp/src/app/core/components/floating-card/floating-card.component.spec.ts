import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FloatingCardComponent } from './floating-card.component';

describe('FloatingCardComponent', () => {
  let component: FloatingCardComponent;
  let fixture: ComponentFixture<FloatingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    // providers: [{ provide: MyService, useValue: {} }],
    imports: [RouterTestingModule, FloatingCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
