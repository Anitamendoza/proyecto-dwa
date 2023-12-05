import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { CrearPeliculasComponent } from './pages/peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';
import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearPeliculasComponent,
    EditarPeliculasComponent,
    ListarPeliculasComponent,
    NavbarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
