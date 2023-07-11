import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MentoriaService} from '../../../services/mentoria/mentoria.service';
import { LoginService } from '../../../services/loginService/login.service';

@Component({
  selector: 'app-agregar-mentoria',
  templateUrl: './agregar-mentoria.component.html',
  styleUrls: ['./agregar-mentoria.component.css'],
})
export class AgregarMentoriaComponent implements OnInit {
  constructor(
    private sesionService: MentoriaService,
    private router: Router,
    public login: LoginService
  ) {}

  ngOnInit(): void {}

  create(sesion: any) {
    this.sesionService.agregarSesion(sesion).subscribe(
      (res) => {
        console.log(sesion);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }
}
