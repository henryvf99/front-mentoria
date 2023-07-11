import { Component, OnInit } from '@angular/core';
import {TemaService} from '../../../services/tema/tema.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Tema} from '../../mentor/model/tema.model';
import { Location } from '@angular/common';
import {LoginService} from '../../../services/loginService/login.service';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html',
  styleUrls: ['./agregar-tema.component.css'],
})
export class AgregarTemaComponent implements OnInit {
  form: FormGroup;
  userActual: any = null;

  constructor(
    private temaService: TemaService,
    private router: Router,
    public login: LoginService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
    });
  }

  save() {
    this.userActual = this.login.getUser();
    let tema = new Tema();
    tema.nombre = this.form.value['nombre'];
    tema.descripcion = this.form.value['descripcion'];
    tema.iduser = this.userActual.id;
    this.temaService.agregarTema(tema).subscribe(
      (res) => {
        this.router.navigate(['/temas']);
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

  back(): void {
    this.location.back();
  }
}
