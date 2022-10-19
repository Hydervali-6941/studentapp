import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsddComponent } from './asdd.component';

describe('AsddComponent', () => {
  let component: AsddComponent;
  let fixture: ComponentFixture<AsddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
