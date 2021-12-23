import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutrixSolutionsComponent } from './sutrixsolutions.component';

describe('TestpvComponent', () => {
  let component: SutrixSolutionsComponent;
  let fixture: ComponentFixture<SutrixSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutrixSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutrixSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
