import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquariComponent } from './enquari.component';

describe('EnquariComponent', () => {
  let component: EnquariComponent;
  let fixture: ComponentFixture<EnquariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
