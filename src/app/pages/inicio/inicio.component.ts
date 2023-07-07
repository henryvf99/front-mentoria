import { Component, OnInit, ViewChild } from '@angular/core';
import { MentoriaService } from '../../services/mentoria/mentoria.service';
import { Sesion } from '../mentor/model/sesion.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  
  sesiones: Sesion[];

  constructor(
    private sesionService: MentoriaService
  ) { }

  ngOnInit(): void {
    this.cargarSesiones();
  }

  cargarSesiones() {
    this.sesionService.listarSesion().subscribe((data: any) => {
      this.sesiones = data;
    });
  }
}
