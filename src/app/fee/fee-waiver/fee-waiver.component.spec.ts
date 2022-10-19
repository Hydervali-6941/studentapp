import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeWaiverComponent } from './fee-waiver.component';

describe('FeeWaiverComponent', () => {
  let component: FeeWaiverComponent;
  let fixture: ComponentFixture<FeeWaiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeWaiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeWaiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
