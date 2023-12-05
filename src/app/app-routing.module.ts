import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './pages/peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';

const routesInicio: Routes = [
  { path: '', component: NavbarComponent },
  //{ path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-peliculas', component: CrearPeliculasComponent },
  { path: 'editar-peliculas/:id', component: EditarPeliculasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
