import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMentoriaComponent } from './listar-mentoria.component';

describe('ListarMentoriaComponent', () => {
  let component: ListarMentoriaComponent;
  let fixture: ComponentFixture<ListarMentoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMentoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMentoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
