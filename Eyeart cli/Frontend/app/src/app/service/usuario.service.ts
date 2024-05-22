import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}usuario`);
  }

  alta(usuario:any) {
    return this.http.post(`${this.url}usuario/agregar`, usuario);
  }

  baja(idUsuario:number) {
    return this.http.delete(`${this.url}usuario/borrar/${idUsuario}`);
  }

  seleccionar(idUsuario:number) {
    return this.http.get(`${this.url}usuario/${idUsuario}`);
  }

  modificacion(usuario:any, idUsuario:number) {
    return this.http.put(`${this.url}usuario/editar/${idUsuario}`, usuario);
  }
}
