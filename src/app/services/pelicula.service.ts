// pelicula.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula'; // Asegúrate de tener el modelo Pelicula definido

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  url = 'http://localhost:3000/peliculas/'; // Ajusta la URL según la ruta de tu backend

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePelicula(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.post(this.url, pelicula);
  }

  viewPelicula(id?: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarPelicula(id: string, pelicula: Pelicula): Observable<any> {
    return this.http.put(this.url + id, pelicula);
  }
}
