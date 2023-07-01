import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMentoriaComponent } from './form-mentoria.component';

describe('FormMentoriaComponent', () => {
  let component: FormMentoriaComponent;
  let fixture: ComponentFixture<FormMentoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMentoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMentoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
