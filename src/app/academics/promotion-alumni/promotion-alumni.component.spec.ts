import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAlumniComponent } from './promotion-alumni.component';

describe('PromotionAlumniComponent', () => {
  let component: PromotionAlumniComponent;
  let fixture: ComponentFixture<PromotionAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
