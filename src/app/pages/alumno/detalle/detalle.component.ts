import { Component, OnInit } from '@angular/core';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { Sesion } from '../../mentor/model/sesion.model';
import { Tema } from '../../mentor/model/tema.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../../../services/loginService/login.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['fecha', 'nombre'];

  public lista: string[];
  sesion = new Sesion();
  temas: Tema[];
  private id: number;

  constructor(
    private sesionService: MentoriaService,
    private location: Location,
    private router: Router,
    public login: LoginService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.sesionService.getId(this.id).subscribe((data: any) => {
        this.sesion = data?.body;
        this.lista = data?.body.items;
        this.dataSource = new MatTableDataSource(this.lista);
      });
    });
  }

  ngOnInit(): void {}

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

  back(): void {
    this.location.back();
  }
}
