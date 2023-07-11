import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTemaComponent } from './actualizar-tema.component';

describe('ActualizarTemaComponent', () => {
  let component: ActualizarTemaComponent;
  let fixture: ComponentFixture<ActualizarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
