import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSubCategoryComponent } from './fee-sub-category.component';

describe('FeeSubCategoryComponent', () => {
  let component: FeeSubCategoryComponent;
  let fixture: ComponentFixture<FeeSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
