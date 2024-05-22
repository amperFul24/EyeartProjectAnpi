import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}pedido`);
  }

  alta(pedido:any) {
    return this.http.post(`${this.url}pedido/agregar`, pedido);
  }

  baja(idPedido:number) {
    return this.http.delete(`${this.url}pedido/borrar/${idPedido}`);
  }

  seleccionar(idPedido:number) {
    return this.http.get(`${this.url}pedido/${idPedido}`);
  }

  modificacion(pedido:any, idPedido:number) {
    return this.http.put(`${this.url}pedido/editar/${idPedido}`, pedido);
  }
}

