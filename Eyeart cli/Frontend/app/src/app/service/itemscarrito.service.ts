import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemscarritoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}itemscarrito`);
  }

  alta(itemscarrito:any) {
    return this.http.post(`${this.url}itemscarrito/agregar`, itemscarrito);
  }

  baja(idItemsCarrito:number) {
    return this.http.delete(`${this.url}itemscarrito/borrar/${idItemsCarrito}`);
  }

  seleccionar(idItemsCarrito:number) {
    return this.http.get(`${this.url}itemscarrito/${idItemsCarrito}`);
  }

  modificacion(itemscarrito:any, idItemsCarrito:number) {
    return this.http.put(`${this.url}itemscarrito/editar/${idItemsCarrito}`, itemscarrito);
  }
}
