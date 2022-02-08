import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyHoc1Component } from './duy-hoc1.component';

describe('DuyHoc1Component', () => {
  let component: DuyHoc1Component;
  let fixture: ComponentFixture<DuyHoc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyHoc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyHoc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
