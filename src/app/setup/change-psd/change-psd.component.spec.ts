import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePsdComponent } from './change-psd.component';

describe('ChangePsdComponent', () => {
  let component: ChangePsdComponent;
  let fixture: ComponentFixture<ChangePsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
