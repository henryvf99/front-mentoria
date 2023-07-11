import { Component, OnInit, ViewChild } from '@angular/core';
import { MentoriaService } from '../../services/mentoria/mentoria.service';
import { Sesion } from '../mentor/model/sesion.model';
import { LoginService } from '../../services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  sesiones: Sesion[];

  constructor(
    private sesionService: MentoriaService,
    public login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarSesiones();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

  cargarSesiones() {
    this.sesionService.listarSesion().subscribe((data: any) => {
      this.sesiones = data;
    });
  }
}
