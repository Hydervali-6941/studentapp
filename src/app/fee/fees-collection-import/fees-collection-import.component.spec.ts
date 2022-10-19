import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesCollectionImportComponent } from './fees-collection-import.component';

describe('FeesCollectionImportComponent', () => {
  let component: FeesCollectionImportComponent;
  let fixture: ComponentFixture<FeesCollectionImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesCollectionImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesCollectionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
