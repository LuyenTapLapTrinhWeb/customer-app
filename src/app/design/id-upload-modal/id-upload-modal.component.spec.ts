import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUploadModalComponent } from './id-upload-modal.component';

describe('IdUploadModalComponent', () => {
  let component: IdUploadModalComponent;
  let fixture: ComponentFixture<IdUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdUploadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
