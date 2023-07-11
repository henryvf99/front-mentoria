import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './pages/register/register.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarMentoriaComponent } from './pages/mentor/agregar-mentoria/agregar-mentoria.component';
import { ListarMentoriaComponent } from './pages/mentor/listar-mentoria/listar-mentoria.component';
import { FormMentoriaComponent } from './pages/mentor/form-mentoria/form-mentoria.component';

import { authInterceptorProviders } from './services/auth.interceptor';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeaderComponent } from './pages/header/header.component';
import { AgregarTemaComponent } from './pages/temas/agregar-tema/agregar-tema.component';
import { ListarTemaComponent } from './pages/temas/listar-tema/listar-tema.component';
import { SesionDetalleComponent } from './pages/sesion-detalle/sesion-detalle.component';
import { HomeComponent } from './pages/alumno/home/home.component';
import { DetalleComponent } from './pages/alumno/detalle/detalle.component';
import { ActualizarTemaComponent } from './pages/temas/actualizar-tema/actualizar-tema.component';
import { DetalleMentoriaComponent } from './pages/mentor/detalle-mentoria/detalle-mentoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    AgregarMentoriaComponent,
    ListarMentoriaComponent,
    FormMentoriaComponent,
    HeaderComponent,
    AgregarTemaComponent,
    ListarTemaComponent,
    SesionDetalleComponent,
    HomeComponent,
    DetalleComponent,
    ActualizarTemaComponent,
    DetalleMentoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
