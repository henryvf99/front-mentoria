import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTemaComponent } from './listar-tema.component';

describe('ListarTemaComponent', () => {
  let component: ListarTemaComponent;
  let fixture: ComponentFixture<ListarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
