import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TemaService } from '../../../services/tema/tema.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tema } from '../../mentor/model/tema.model';
import Swal from 'sweetalert2';
import {LoginService} from '../../../services/loginService/login.service';

@Component({
  selector: 'app-listar-tema',
  templateUrl: './listar-tema.component.html',
  styleUrls: ['./listar-tema.component.css'],
})
export class ListarTemaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];

  temas: Tema[];
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  finalData: any;
  form: FormGroup;
  userActual: any = null;

  constructor(
    private temaService: TemaService,
    private router: Router,
    public login: LoginService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required, Validators.pattern('[0-9]')],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarTemasDelUsuario();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['/login']);
  }

  delete(id: number) {
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar el tema?',
      text: 'La acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.temaService.eliminarTema(id).subscribe(() => {
          this.cargarTemasDelUsuario();
        });
        Swal.fire('Eliminado!', 'Eliminaste el tema.', 'success').then(
          (okay) => {
            if (okay) {
              window.location.reload();
            }
          }
        );
      }
    });
  }

  cargarTemas() {
    this.temaService.listarTemas().subscribe((dato) => {
      this.temas = dato;
      this.finalData = new MatTableDataSource<Tema>(this.temas);
      this.finalData.paginator = this._paginator;
      this.finalData.sort = this._sort;
    });
  }

  cargarTemasDelUsuario() {
    this.userActual = this.login.getUser();
    this.temaService
      .listarTemasPorUsuario(this.userActual.id)
      .subscribe((data: any) => {
        this.finalData = new MatTableDataSource(data['body']);
        this.finalData.paginator = this._paginator;
        this.finalData.sort = this._sort;
      });
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
}
