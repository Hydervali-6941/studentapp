import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchregComponent } from './branchreg.component';

describe('BranchregComponent', () => {
  let component: BranchregComponent;
  let fixture: ComponentFixture<BranchregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
