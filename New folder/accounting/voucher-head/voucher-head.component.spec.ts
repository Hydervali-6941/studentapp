import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherHeadComponent } from './voucher-head.component';

describe('VoucherHeadComponent', () => {
  let component: VoucherHeadComponent;
  let fixture: ComponentFixture<VoucherHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
