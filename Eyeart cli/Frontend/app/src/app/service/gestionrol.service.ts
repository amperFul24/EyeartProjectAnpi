import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionrolService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}gestionroles`);
  }

  alta(gestionroles:any) {
    return this.http.post(`${this.url}gestionroles/agregar`, gestionroles);
  }

  baja(Usuario_idUsuario:number) {
    return this.http.delete(`${this.url}gestionroles/borrar/${Usuario_idUsuario}`);
  }

  seleccionar(Usuario_idUsuario:number) {
    return this.http.get(`${this.url}gestionroles/${Usuario_idUsuario}`);
  }

  modificacion(gestionroles:any, Usuario_idUsuario:number) {
    return this.http.put(`${this.url}gestionroles/editar/${Usuario_idUsuario}`, gestionroles);
  }
}
