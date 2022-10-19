import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSubCategoryFineComponent } from './fee-sub-category-fine.component';

describe('FeeSubCategoryFineComponent', () => {
  let component: FeeSubCategoryFineComponent;
  let fixture: ComponentFixture<FeeSubCategoryFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeSubCategoryFineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSubCategoryFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
