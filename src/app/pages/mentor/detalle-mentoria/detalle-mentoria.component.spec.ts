import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMentoriaComponent } from './detalle-mentoria.component';

describe('DetalleMentoriaComponent', () => {
  let component: DetalleMentoriaComponent;
  let fixture: ComponentFixture<DetalleMentoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMentoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMentoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
