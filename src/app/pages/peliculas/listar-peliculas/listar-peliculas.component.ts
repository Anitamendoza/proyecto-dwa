import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {

  listPeliculas: Pelicula[] = [];
  elementos: number = 0;
  peliculaMasCara: Pelicula | null = null;

  constructor(private _peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this._peliculaService.getPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    });
  }

  eliminarPelicula(id: any) {
    this._peliculaService.deletePelicula(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminación de Película',
        text: '¿Desea eliminar la película?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
        }
      });
    });
  }
}
