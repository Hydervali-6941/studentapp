import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStatementsComponent } from './salary-statements.component';

describe('SalaryStatementsComponent', () => {
  let component: SalaryStatementsComponent;
  let fixture: ComponentFixture<SalaryStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
