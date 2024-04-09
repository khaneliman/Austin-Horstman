import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjKellerComponent } from './jj-keller.component';

describe('JjKellerComponent', () => {
  let component: JjKellerComponent;
  let fixture: ComponentFixture<JjKellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [JjKellerComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JjKellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
