import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MentoriaService } from '../../services/mentoria/mentoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sesion } from '../mentor/model/sesion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'horaInicio',
    'horaFin',
    'link',
    'calificacion',
    'anotaciones',
    'acciones',
  ];

  sesiones: Sesion[];
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  finalData: any;
  form: FormGroup;

  constructor(
    private sesionService: MentoriaService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required, Validators.pattern('[0-9]')],
      nombre: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      link: ['', Validators.required],
      calificacion: ['', Validators.required],
      anotaciones: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarSesiones();
  }

  delete(id: number) {
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar la sesion?',
      text: 'La acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.sesionService.eliminarSesion(id).subscribe(() => {
          this.cargarSesiones();
        });
        Swal.fire('Eliminado!', 'Eliminaste la sesion.', 'success').then(
          (okay) => {
            if (okay) {
              window.location.reload();
            }
          }
        );
      }
    });
  }

  cargarSesiones() {
    this.sesionService.listarSesion().subscribe((dato) => {
      this.sesiones = dato;
      this.finalData = new MatTableDataSource<Sesion>(this.sesiones);
      this.finalData.paginator = this._paginator;
      this.finalData.sort = this._sort;
    });
  }

  verTemas(id: number) {
    this.router.navigate(['/view', id]);
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
}
