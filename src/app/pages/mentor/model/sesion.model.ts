import {Horario} from './horario.model';

export class Sesion {
  id: number;
  nombre: string;
  horaInicio: string;
  horaFin: string;
  link: string;
  calificacion: string;
  anotaciones: string;
  items: Horario[];
}
