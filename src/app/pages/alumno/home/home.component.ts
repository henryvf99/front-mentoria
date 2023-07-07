import { Component, OnInit, ViewChild } from '@angular/core';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { Sesion } from '../../mentor/model/sesion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sesiones: Sesion[];

  constructor(private sesionService: MentoriaService) {}

  ngOnInit(): void {
    this.cargarSesiones();
  }

  cargarSesiones() {
    this.sesionService.listarSesion().subscribe((data: any) => {
      this.sesiones = data;
    });
  }
}
