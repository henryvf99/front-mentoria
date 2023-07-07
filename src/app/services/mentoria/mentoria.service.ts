import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Sesion} from '../../pages/mentor/model/sesion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MentoriaService {
  constructor(private http: HttpClient) {}

  agregarSesion(sesion: Sesion) {
    return this.http.post(`${environment.baseUrl}/sesion`, sesion);
  }

  listarSesion() {
    return this.http.get<Sesion[]>(`${environment.baseUrl}/sesion`);
  }

  eliminarSesion(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/sesion/${id}`);
  }

  getId(id: number) {
    return this.http.get(`${environment.baseUrl}/sesion/${id}`);
  }

  public listarNotasPorUsuario(id: number) {
    return this.http.get<Sesion[]>(`${environment.baseUrl}/sesion/listar/${id}`);
  }

}
