import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupConcessionComponent } from './group-concession.component';

describe('GroupConcessionComponent', () => {
  let component: GroupConcessionComponent;
  let fixture: ComponentFixture<GroupConcessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupConcessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupConcessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
