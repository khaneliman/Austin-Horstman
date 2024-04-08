import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseToolComponent } from './database-tool.component';

describe('DatabaseToolComponent', () => {
  let component: DatabaseToolComponent;
  let fixture: ComponentFixture<DatabaseToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DatabaseToolComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
