import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginizationComponent } from './orginization.component';

describe('OrginizationComponent', () => {
  let component: OrginizationComponent;
  let fixture: ComponentFixture<OrginizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrginizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
