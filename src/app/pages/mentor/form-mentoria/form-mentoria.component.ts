import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { TemaService } from '../../../services/tema/tema.service';
import { Tema } from '../model/tema.model';
import { Sesion } from '../model/sesion.model';
import { Horario } from '../model/horario.model';

@Component({
  selector: 'app-form-mentoria',
  templateUrl: './form-mentoria.component.html',
  styleUrls: ['./form-mentoria.component.css'],
})
export class FormMentoriaComponent implements OnInit {
  form: FormGroup;
  temas: Tema[];

  orderLines: Horario[] = [];

  myControlTema = new FormControl();
  temasFiltrados$: Observable<Tema[]>;

  @Input() rs: Sesion = new Sesion();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private serviceSesion: MentoriaService,
    private serviceTema: TemaService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl(),
      horaInicio: new FormControl(),
      horaFin: new FormControl(),
      link: new FormControl(),
      calificacion: new FormControl(),
      anotaciones: new FormControl(),
      fecha: new FormControl(),
      tema: this.myControlTema,
    });

    this.listarTemas();

    this.temasFiltrados$ = this.myControlTema.valueChanges.pipe(
      map((val) => this.filtrarTemas(val))
    );

  }

  listarTemas() {
    this.serviceTema.listarTemas().subscribe((data: any) => {
      this.temas = data;
    });
  }

  filtrarTemas(val: any) {
    if (val != null && val.id > 0) {
      return this.temas.filter((el) =>
        el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
      );
    }

    return this.temas.filter((el) =>
      el.nombre.toLowerCase().includes(val?.toLowerCase())
    );
  }

  mostrarTema(val: Tema) {
    return val ? `${val.nombre}` : val;
  }

  agregarTema() {
    if (this.form.value['tema']) {
      let orderLine = new Horario();

      var fecha = this.form.value['fecha'];
      var resFecha = fecha.split('-');
      var reversedFecha = resFecha.reverse();
      var fechaOb = reversedFecha.join('/');

      orderLine.fecha = fechaOb;
      
      orderLine.tema = this.form.value['tema'];

      this.orderLines.push(orderLine);
    }
  }

  removerTema(index: number) {
    this.orderLines.splice(index, 1);
  }

  save() {
    let sesion = new Sesion();
    sesion.nombre = this.form.value['nombre'];
    sesion.horaInicio = this.form.value['horaInicio'];
    sesion.horaFin = this.form.value['horaFin'];
    sesion.link = this.form.value['link'];
    sesion.calificacion = this.form.value['calificacion'];
    sesion.anotaciones = this.form.value['anotaciones'];
    sesion.items = this.orderLines;
    //console.log(fechaOb);
    this.onSave.emit(sesion);
  }
  back(): void {
    this.location.back();
  }
}
