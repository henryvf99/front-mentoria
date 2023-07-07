import {Horario} from './horario.model';

export class Sesion {
  id: number;
  nombre: string;
  fechaInicio: string;
  fechaFin: string;
  link: string;
  mentor: string;
  anotaciones: string;
  iduser: number;
  items: Horario[];
}
