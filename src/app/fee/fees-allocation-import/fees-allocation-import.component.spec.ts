import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAllocationImportComponent } from './fees-allocation-import.component';

describe('FeesAllocationImportComponent', () => {
  let component: FeesAllocationImportComponent;
  let fixture: ComponentFixture<FeesAllocationImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesAllocationImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAllocationImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
