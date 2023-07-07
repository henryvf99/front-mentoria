import { Injectable } from '@angular/core';
import {Tema} from '../../pages/mentor/model/tema.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  agregarTema(tema: Tema) {
    return this.http.post(`${environment.baseUrl}/tema`, tema);
  }

  actualizarTema(tema: Tema) {
    return this.http.put(`${environment.baseUrl}/tema`, tema);
  }

  listarTemas() {
    return this.http.get<Tema[]>(`${environment.baseUrl}/tema`);
  }

  public listarTemasPorUsuario(id: number) {
    return this.http.get<Tema[]>(`${environment.baseUrl}/tema/listar/${id}`);
  }

  eliminarTema(id: number) {
    return this.http.delete(`${environment.baseUrl}/tema/${id}`);
  }

  getId(id: number) {
    return this.http.get(`${environment.baseUrl}/tema/${id}`);
  }
}
