import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MentoriaService} from '../../../services/mentoria/mentoria.service';

@Component({
  selector: 'app-agregar-mentoria',
  templateUrl: './agregar-mentoria.component.html',
  styleUrls: ['./agregar-mentoria.component.css'],
})
export class AgregarMentoriaComponent implements OnInit {
  constructor(private sesionService: MentoriaService, private router: Router) {}

  ngOnInit(): void {}

  create(sesion: any) {
    this.sesionService.agregarSesion(sesion).subscribe(
      (res) => {
        console.log(sesion);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
