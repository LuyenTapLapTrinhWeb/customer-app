import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyHoc2Component } from './duy-hoc2.component';

describe('DuyHoc2Component', () => {
  let component: DuyHoc2Component;
  let fixture: ComponentFixture<DuyHoc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyHoc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyHoc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
