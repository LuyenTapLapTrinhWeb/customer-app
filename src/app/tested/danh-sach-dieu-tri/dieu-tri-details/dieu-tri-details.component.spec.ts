import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuTriDetailsComponent } from './dieu-tri-details.component';

describe('DieuTriDetailsComponent', () => {
  let component: DieuTriDetailsComponent;
  let fixture: ComponentFixture<DieuTriDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieuTriDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuTriDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
