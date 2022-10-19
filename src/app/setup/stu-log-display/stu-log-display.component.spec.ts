import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLogDisplayComponent } from './stu-log-display.component';

describe('StuLogDisplayComponent', () => {
  let component: StuLogDisplayComponent;
  let fixture: ComponentFixture<StuLogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLogDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuLogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
