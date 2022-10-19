import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanningComponent } from './lesson-planning.component';

describe('LessonPlanningComponent', () => {
  let component: LessonPlanningComponent;
  let fixture: ComponentFixture<LessonPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
