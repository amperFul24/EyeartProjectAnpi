import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class metodopagoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}metodopago`);
  }

  alta(metodopago:any) {
    return this.http.post(`${this.url}metodopago/agregar`, metodopago);
  }

  baja(idMetodoPago:number) {
    return this.http.delete(`${this.url}metodopago/borrar/${idMetodoPago}`);
  }

  seleccionar(idMetodoPago:number) {
    return this.http.get(`${this.url}metodopago/${idMetodoPago}`);
  }

  modificacion(metodopago:any, idMetodoPago:number) {
    return this.http.put(`${this.url}metodopago/editar/${idMetodoPago}`, metodopago);
  }
}
