import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosUplodeComponent } from './photos-uplode.component';

describe('PhotosUplodeComponent', () => {
  let component: PhotosUplodeComponent;
  let fixture: ComponentFixture<PhotosUplodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosUplodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosUplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
