import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MentoriaService } from '../../../services/mentoria/mentoria.service';
import { LoginService } from '../../../services/loginService/login.service';
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

  mentor: string = '';
  userActual: any = null;
  userTemas: any = null;

  myControlTema = new FormControl();
  temasFiltrados$: Observable<Tema[]>;

  @Input() rs: Sesion = new Sesion();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private serviceSesion: MentoriaService,
    private serviceTema: TemaService,
    public login: LoginService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      link: new FormControl(),
      calificacion: new FormControl(),
      anotaciones: new FormControl(),
      hora: new FormControl(),
      tema: this.myControlTema,
    });

    this.listarTemas();

    this.temasFiltrados$ = this.myControlTema.valueChanges.pipe(
      map((val) => this.filtrarTemas(val))
    );
  }

  listarTemas() {
    this.userTemas = this.login.getUser();
    this.serviceTema.listarTemasPorUsuario(this.userTemas.id).subscribe((data: any) => {
      this.temas = data?.body;
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

      var fecha = this.form.value['hora'];
      var resFecha = fecha.split('-');
      var reversedFecha = resFecha.reverse();
      var fechaOb = reversedFecha.join('/');

      orderLine.hora = this.form.value['hora'];

      orderLine.tema = this.form.value['tema'];

      this.orderLines.push(orderLine);
    }
  }

  removerTema(index: number) {
    this.orderLines.splice(index, 1);
  }

  save() {
    this.userActual = this.login.getUser();
    let sesion = new Sesion();
    sesion.nombre = this.form.value['nombre'];

    var fecha = this.form.value['fechaInicio'];
    var resFecha = fecha.split('-');
    var reversedFecha = resFecha.reverse();
    var fechaI = reversedFecha.join('/');
    sesion.fechaInicio = fechaI;

    var fechaA = this.form.value['fechaFin'];
    var guFecha = fechaA.split('-');
    var reverseFecha = guFecha.reverse();
    var fechaF = reverseFecha.join('/');

    sesion.fechaFin = fechaF;

    sesion.link = this.form.value['link'];
    sesion.anotaciones = this.form.value['anotaciones'];
    sesion.items = this.orderLines;
    sesion.iduser = this.userActual.id;
    this.mentor = this.userActual.nombre + ' ' + this.userActual.apellido;
    sesion.mentor = this.mentor;
    this.onSave.emit(sesion);
  }
  back(): void {
    this.location.back();
  }
}
