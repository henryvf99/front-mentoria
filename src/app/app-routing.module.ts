import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {InicioComponent} from './pages/inicio/inicio.component';
import {AgregarMentoriaComponent} from './pages/mentor/agregar-mentoria/agregar-mentoria.component';
import { IsLoggedInGuard } from './guards/isLoggedIn/is-logged-in.guard';

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
    path: 'mentor/agregar',
    component: AgregarMentoriaComponent,
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
