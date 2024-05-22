import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  url='https://eyeartnodeservice.onrender.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}tipodocumento`);
  }

  alta(tipodocumento:any) {
    return this.http.post(`${this.url}tipodocumento/agregar`, tipodocumento);
  }

  baja(idTipoDocumento:number) {
    return this.http.delete(`${this.url}tipodocumento/borrar/${idTipoDocumento}`);
  }

  seleccionar(idTipoDocumento:number) {
    return this.http.get(`${this.url}tipodocumento/${idTipoDocumento}`);
  }

  modificacion(tipodocumento:any, idTipoDocumento:number) {
    return this.http.put(`${this.url}tipodocumento/editar/${idTipoDocumento}`, tipodocumento);
  }
}
