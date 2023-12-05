// crear-peliculas.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula'; // Asegúrate de tener el modelo Pelicula definido
import { PeliculaService } from 'src/app/services/pelicula.service'; // Asegúrate de tener el servicio PeliculaService definido
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-peliculas',
  templateUrl: './crear-peliculas.component.html',
  styleUrls: ['./crear-peliculas.component.css']
})
export class CrearPeliculasComponent {

  peliculaForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              private _peliculaService: PeliculaService) {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      actores: ['', Validators.required]
    });
  }

  agregarPelicula() {
    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actor')?.value,
    };

    Swal.fire({
      title: 'Creación de Película',
      text: '¿Desea crear la película?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._peliculaService.guardarPelicula(PELICULA).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-peliculas']);
        });
      }
    });
  }
}
