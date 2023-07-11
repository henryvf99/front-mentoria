import { Component, OnInit, ViewChild } from '@angular/core';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { Sesion } from '../../mentor/model/sesion.model';
import { LoginService } from '../../../services/loginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sesiones: Sesion[];

  constructor(
    private router: Router,
    public login: LoginService,
    private sesionService: MentoriaService
  ) {}

  ngOnInit(): void {
    this.cargarSesiones();
  }

  cargarSesiones() {
    this.sesionService.listarSesion().subscribe((data: any) => {
      this.sesiones = data;
    });
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

}
