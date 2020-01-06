import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanicComponent } from './button-panic.component';

describe('ButtonPanicComponent', () => {
  let component: ButtonPanicComponent;
  let fixture: ComponentFixture<ButtonPanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
