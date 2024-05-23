import { Component } from '@angular/core';
import { GestionrolService } from '../../service/gestionrol.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionroles',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './gestionroles.component.html',
  styleUrl: './gestionroles.component.css'
})
export class GestionrolesComponent {
  gestion: any;

  rol = {
    Usuario_idUsuario:0,
    Nombre: "",
    Descripcion:"",
    Rol_idRol: 0,
  }
  
  constructor(private gestionrolService:GestionrolService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.gestionrolService.recuperarTodos().subscribe((result:any) => {
      this.gestion = result;
    });
  }
  
  baja(idUsuario:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.gestionrolService.baja(idUsuario).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.gestionrolService.recuperarTodos()
    .subscribe(result => this.gestion = result)
    });
  }
  }
  seleccionar(idUsuario:number) {
    this.gestionrolService.seleccionar(idUsuario).subscribe((result:any) => this.rol = result[0]);
  }
  }