import { Component } from '@angular/core';
import { RolService } from '../../service/rol.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './rol.component.html',
  styleUrl: './rol.component.css'
})
export class RolComponent {
  roles: any;

  rol = {
    idRol:0,
    Descripcion:'',
  }
  
  constructor(private rolService:RolService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.rolService.recuperarTodos().subscribe((result:any) => {
      this.roles = result;
    });
  }
  
  baja(idRol:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.rolService.baja(idRol).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.rolService.recuperarTodos()
    .subscribe(result => this.roles = result)
    });
  }
  }
  seleccionar(idRol:number) {
    this.rolService.seleccionar(idRol).subscribe((result:any) => this.rol = result[0]);
  }
  }