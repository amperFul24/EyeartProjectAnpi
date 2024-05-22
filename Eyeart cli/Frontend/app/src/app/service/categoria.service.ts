import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}categoria`);
  }

  alta(categoria:any) {
    return this.http.post(`${this.url}categoria/agregar`, categoria);
  }

  baja(idCategoria:number) {
    return this.http.delete(`${this.url}categoria/borrar/${idCategoria}`);
  }

  seleccionar(idCategoria:number) {
    return this.http.get(`${this.url}categoria/${idCategoria}`);
  }

  modificacion(categoria:any, idCategoria:number) {
    return this.http.put(`${this.url}categoria/editar/${idCategoria}`, categoria);
  }
}
