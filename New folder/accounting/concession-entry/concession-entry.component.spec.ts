import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionEntryComponent } from './concession-entry.component';

describe('ConcessionEntryComponent', () => {
  let component: ConcessionEntryComponent;
  let fixture: ComponentFixture<ConcessionEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
