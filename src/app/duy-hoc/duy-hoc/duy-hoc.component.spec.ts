import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyHocComponent } from './duy-hoc.component';

describe('DuyHocComponent', () => {
  let component: DuyHocComponent;
  let fixture: ComponentFixture<DuyHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
