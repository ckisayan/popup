import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotes2Component } from './error-notes2.component';

describe('ErrorNotes2Component', () => {
  let component: ErrorNotes2Component;
  let fixture: ComponentFixture<ErrorNotes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
