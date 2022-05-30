import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveContactComponent } from './responsive-contact.component';

describe('ResponsiveContactComponent', () => {
  let component: ResponsiveContactComponent;
  let fixture: ComponentFixture<ResponsiveContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
