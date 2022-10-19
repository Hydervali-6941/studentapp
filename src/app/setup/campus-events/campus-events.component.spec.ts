import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEventsComponent } from './campus-events.component';

describe('CampusEventsComponent', () => {
  let component: CampusEventsComponent;
  let fixture: ComponentFixture<CampusEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
