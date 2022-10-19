import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsLibComponent } from './reports-lib.component';

describe('ReportsLibComponent', () => {
  let component: ReportsLibComponent;
  let fixture: ComponentFixture<ReportsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
