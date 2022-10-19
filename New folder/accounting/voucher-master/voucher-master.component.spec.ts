import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherMasterComponent } from './voucher-master.component';

describe('VoucherMasterComponent', () => {
  let component: VoucherMasterComponent;
  let fixture: ComponentFixture<VoucherMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
