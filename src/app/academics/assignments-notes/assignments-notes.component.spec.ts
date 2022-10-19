import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsNotesComponent } from './assignments-notes.component';

describe('AssignmentsNotesComponent', () => {
  let component: AssignmentsNotesComponent;
  let fixture: ComponentFixture<AssignmentsNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
