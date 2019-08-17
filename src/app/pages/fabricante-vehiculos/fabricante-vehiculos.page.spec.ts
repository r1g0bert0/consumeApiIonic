import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteVehiculosPage } from './fabricante-vehiculos.page';

describe('FabricanteVehiculosPage', () => {
  let component: FabricanteVehiculosPage;
  let fixture: ComponentFixture<FabricanteVehiculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricanteVehiculosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricanteVehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
