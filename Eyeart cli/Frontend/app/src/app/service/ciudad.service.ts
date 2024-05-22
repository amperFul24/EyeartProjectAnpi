import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}ciudad`);
  }

  alta(ciudad:any) {
    return this.http.post(`${this.url}ciudad/agregar`, ciudad);
  }

  baja(idCiudad:number) {
    return this.http.delete(`${this.url}ciudad/borrar/${idCiudad}`);
  }

  seleccionar(idCiudad:number) {
    return this.http.get(`${this.url}ciudad/${idCiudad}`);
  }

  modificacion(ciudad:any, idCiudad:number) {
    return this.http.put(`${this.url}ciudad/editar/${idCiudad}`, ciudad);
  }
}
