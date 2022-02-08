import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyHoc3Component } from './duy-hoc3.component';

describe('DuyHoc3Component', () => {
  let component: DuyHoc3Component;
  let fixture: ComponentFixture<DuyHoc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyHoc3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyHoc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
