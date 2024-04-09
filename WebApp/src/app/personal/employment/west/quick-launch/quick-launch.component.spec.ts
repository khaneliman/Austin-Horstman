import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLaunchComponent } from './quick-launch.component';

describe('QuickLaunchComponent', () => {
  let component: QuickLaunchComponent;
  let fixture: ComponentFixture<QuickLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [QuickLaunchComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
