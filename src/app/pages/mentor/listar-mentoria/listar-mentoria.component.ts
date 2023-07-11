import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { LoginService } from '../../../services/loginService/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sesion } from '../../mentor/model/sesion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-mentoria',
  templateUrl: './listar-mentoria.component.html',
  styleUrls: ['./listar-mentoria.component.css'],
})
export class ListarMentoriaComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'fechaInicio',
    'fechaFin',
    'link',
    'anotaciones',
    'acciones',
  ];

  userActual: any = null;

  sesiones: Sesion[];
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  finalData: any;
  form: FormGroup;

  constructor(
    private sesionService: MentoriaService,
    private router: Router,
    public login: LoginService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required, Validators.pattern('[0-9]')],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      link: ['', Validators.required],
      anotaciones: ['', Validators.required],
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
    this.userActual = this.login.getUser();
    this.sesionService
      .listarNotasPorUsuario(this.userActual.id)
      .subscribe((data: any) => {
        this.finalData = new MatTableDataSource(data['body']);
        this.finalData.paginator = this._paginator;
        this.finalData.sort = this._sort;
      });
  }

  verTemas(id: number) {
    this.router.navigate(['/home/:id/sesion', id]);
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
}
