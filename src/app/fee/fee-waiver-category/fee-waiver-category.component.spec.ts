import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeWaiverCategoryComponent } from './fee-waiver-category.component';

describe('FeeWaiverCategoryComponent', () => {
  let component: FeeWaiverCategoryComponent;
  let fixture: ComponentFixture<FeeWaiverCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeWaiverCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeWaiverCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
