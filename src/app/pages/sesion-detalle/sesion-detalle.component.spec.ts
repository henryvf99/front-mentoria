import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionDetalleComponent } from './sesion-detalle.component';

describe('SesionDetalleComponent', () => {
  let component: SesionDetalleComponent;
  let fixture: ComponentFixture<SesionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
