import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotesComponent } from './error-notes.component';

describe('ErrorNotesComponent', () => {
  let component: ErrorNotesComponent;
  let fixture: ComponentFixture<ErrorNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
