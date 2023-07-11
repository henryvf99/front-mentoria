import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import { SesionDetalleComponent } from './pages/sesion-detalle/sesion-detalle.component';
import {RegisterComponent} from "./pages/register/register.component";
import {InicioComponent} from './pages/inicio/inicio.component';
import {AgregarMentoriaComponent} from './pages/mentor/agregar-mentoria/agregar-mentoria.component';
import { ListarMentoriaComponent } from './pages/mentor/listar-mentoria/listar-mentoria.component';
import { DetalleMentoriaComponent } from './pages/mentor/detalle-mentoria/detalle-mentoria.component';
import { IsLoggedInGuard } from './guards/isLoggedIn/is-logged-in.guard';
import {ListarTemaComponent} from './pages/temas/listar-tema/listar-tema.component';
import { HomeComponent } from './pages/alumno/home/home.component';
import { DetalleComponent } from './pages/alumno/detalle/detalle.component';
import { ActualizarTemaComponent } from './pages/temas/actualizar-tema/actualizar-tema.component';
import { AgregarTemaComponent } from './pages/temas/agregar-tema/agregar-tema.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: InicioComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'alumno',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'home/:id/sesion',
    component: SesionDetalleComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'alumno/:id/detalle',
    component: DetalleComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'mentor/agregar',
    component: AgregarMentoriaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'mentor',
    component: ListarMentoriaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'mentor/:id/detalle',
    component: DetalleMentoriaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'temas',
    component: ListarTemaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'temas/:id/edit',
    component: ActualizarTemaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'temas/agregar',
    component: AgregarTemaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
