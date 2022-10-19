import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSDetailsComponent } from './sms-details.component';

describe('SMSDetailsComponent', () => {
  let component: SMSDetailsComponent;
  let fixture: ComponentFixture<SMSDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMSDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
