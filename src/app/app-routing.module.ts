import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

const routesInicio: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
