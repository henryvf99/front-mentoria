import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TemaService} from '../../../services/tema/tema.service';
import {Tema} from '../../mentor/model/tema.model';
import { Location } from '@angular/common';
import { LoginService } from '../../../services/loginService/login.service';

@Component({
  selector: 'app-actualizar-tema',
  templateUrl: './actualizar-tema.component.html',
  styleUrls: ['./actualizar-tema.component.css'],
})
export class ActualizarTemaComponent implements OnInit {
  private id: number;
  public tema: Tema;

  public nombre: string = '';
  public descripcion: string = '';

  constructor(
    private temaService: TemaService,
    private router: Router,
    private location: Location,
    public login: LoginService,
    public activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.temaService.getId(this.id).subscribe((data: any) => {
        this.tema = data?.body;
        this.nombre = data?.body.nombre;
        this.descripcion = data?.body.descripcion;
      });
    });
  }

  ngOnInit(): void {}

  update() {
    this.tema.nombre = this.nombre;
    this.tema.descripcion = this.descripcion;
    this.temaService.actualizarTema(this.tema).subscribe(() => {
      this.router.navigate(['temas']);
    });
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

  back(): void {
    this.location.back();
  }
}
