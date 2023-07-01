import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMentoriaComponent } from './agregar-mentoria.component';

describe('AgregarMentoriaComponent', () => {
  let component: AgregarMentoriaComponent;
  let fixture: ComponentFixture<AgregarMentoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMentoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMentoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
