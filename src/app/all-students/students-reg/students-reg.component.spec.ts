import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRegComponent } from './students-reg.component';

describe('StudentsRegComponent', () => {
  let component: StudentsRegComponent;
  let fixture: ComponentFixture<StudentsRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
