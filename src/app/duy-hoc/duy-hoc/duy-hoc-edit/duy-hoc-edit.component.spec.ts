import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyHocEditComponent } from './duy-hoc-edit.component';

describe('DuyHocEditComponent', () => {
  let component: DuyHocEditComponent;
  let fixture: ComponentFixture<DuyHocEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyHocEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyHocEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
