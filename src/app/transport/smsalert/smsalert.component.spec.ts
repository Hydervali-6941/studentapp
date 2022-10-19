import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsalertComponent } from './smsalert.component';

describe('SmsalertComponent', () => {
  let component: SmsalertComponent;
  let fixture: ComponentFixture<SmsalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
