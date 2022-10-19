import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFeeComponent } from './collection-fee.component';

describe('CollectionFeeComponent', () => {
  let component: CollectionFeeComponent;
  let fixture: ComponentFixture<CollectionFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
