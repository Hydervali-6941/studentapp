import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTransferComponent } from './hostel-transfer.component';

describe('HostelTransferComponent', () => {
  let component: HostelTransferComponent;
  let fixture: ComponentFixture<HostelTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
