import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}carrito`);
  }

  alta(carrito:any) {
    return this.http.post(`${this.url}carrito/agregar`, carrito);
  }

  baja(idCarrito:number) {
    return this.http.delete(`${this.url}carrito/borrar/${idCarrito}`);
  }

  seleccionar(idCarrito:number) {
    return this.http.get(`${this.url}carrito/${idCarrito}`);
  }

  modificacion(carrito:any, idCarrito:number) {
    return this.http.put(`${this.url}carrito/editar/${idCarrito}`, carrito);
  }
}
