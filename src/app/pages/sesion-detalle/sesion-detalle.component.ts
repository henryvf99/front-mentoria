import { Component, OnInit } from '@angular/core';
import { MentoriaService } from '../../services/mentoria/mentoria.service';
import { Sesion } from '../mentor/model/sesion.model';
import { Tema } from '../mentor/model/tema.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sesion-detalle',
  templateUrl: './sesion-detalle.component.html',
  styleUrls: ['./sesion-detalle.component.css'],
})
export class SesionDetalleComponent implements OnInit {
  
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['fecha', 'nombre'];

  public lista: string[];
  sesion = new Sesion();
  temas: Tema[];
  private id: number;

  constructor(
    private sesionService: MentoriaService,
    private location: Location,
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

  back(): void {
    this.location.back();
  }
  
}
