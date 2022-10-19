import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelRegisterComponent } from './hostel-register.component';

describe('HostelRegisterComponent', () => {
  let component: HostelRegisterComponent;
  let fixture: ComponentFixture<HostelRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
