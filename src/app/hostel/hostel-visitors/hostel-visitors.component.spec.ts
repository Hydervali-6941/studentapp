import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelVisitorsComponent } from './hostel-visitors.component';

describe('HostelVisitorsComponent', () => {
  let component: HostelVisitorsComponent;
  let fixture: ComponentFixture<HostelVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
