import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}rol`);
  }

  alta(rol:any) {
    return this.http.post(`${this.url}rol/agregar`, rol);
  }

  baja(idRol:number) {
    return this.http.delete(`${this.url}rol/borrar/${idRol}`);
  }

  seleccionar(idRol:number) {
    return this.http.get(`${this.url}rol/${idRol}`);
  }

  modificacion(rol:any, idRol:number) {
    return this.http.put(`${this.url}rol/editar/${idRol}`, rol);
  }
}
