import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DatabaseToolComponent } from './database-tool.component';

describe('DatabaseToolComponent', () => {
  let component: DatabaseToolComponent;
  let fixture: ComponentFixture<DatabaseToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseToolComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
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
