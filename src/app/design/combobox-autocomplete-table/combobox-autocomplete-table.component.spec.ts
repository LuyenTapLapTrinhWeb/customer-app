import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxAutocompleteTableComponent } from './combobox-autocomplete-table.component';

describe('ComboboxAutocompleteTableComponent', () => {
  let component: ComboboxAutocompleteTableComponent;
  let fixture: ComponentFixture<ComboboxAutocompleteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxAutocompleteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxAutocompleteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
