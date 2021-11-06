import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // providers: [{ provide: MyService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // myService = TestBed.inject(MyService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });

    // it.todo('should ...');
  });
})