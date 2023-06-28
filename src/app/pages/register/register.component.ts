import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/registerService/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    email: '',
  }
  constructor(private registerService:RegisterService){
  }

  register(){
    if(this.user.username == '' || this.user.username == null){
      alert("El nombre de usuario es requerido");
      return;
    }
    this.registerService.añadirUsuario(this.user)
      .subscribe(res=>{
        console.log("Registrado!")
      },error => {
        console.log(error);
      })
  }


  ngOnInit(): void {

  }
}
