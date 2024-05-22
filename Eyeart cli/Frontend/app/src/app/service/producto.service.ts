import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}producto`);
  }

  recuperarRand(){
    return this.http.get(this.url + 'producto/limited');
  }

  alta(Producto:any) {
    return this.http.post(`${this.url}producto/agregar`, Producto);
  }

  baja(idProducto:number) {
    return this.http.delete(`${this.url}producto/borrar/${idProducto}`);
  }

  seleccionar(idProducto:number) {
    return this.http.get(`${this.url}producto/${idProducto}`);
  }

  modificacion(Producto:any, idProducto:number) {
    return this.http.put(`${this.url}producto/editar/${idProducto}`, Producto);
  }
}
