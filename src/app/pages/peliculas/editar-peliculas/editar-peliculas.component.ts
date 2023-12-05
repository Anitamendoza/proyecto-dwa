// editar-peliculas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class EditarPeliculasComponent implements OnInit {
  peliculaForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculaService
  ) {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      actor: ['', Validators.required]
    });
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.peliculaService.viewPelicula(this.id).subscribe(data => {
        this.peliculaForm.setValue({
          titulo: data.titulo,
          genero: data.genero,
          director: data.director,
          actor: data.actor
        });
      });
    }
  }

  editarPelicula() {
    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actor')?.value
    };

    Swal.fire({
      title: 'Actualización de Película',
      text: '¿Desea actualizar la película?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.peliculaService.actualizarPelicula(this.id, PELICULA).subscribe(data => {
            console.log(PELICULA);
            this.router.navigate(['/listar-peliculas']);
          });
        }
      }
    });
  }
}
