import { CommonModule } from '@angular/common';
import { UsuarioService } from './../../../service/usuario.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule, CommonModule ,RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarUsuarioComponent {
  usuario:any;

  user={
    idUsuario:0,
    Nombre:"",
    Apellido:"",
    NumeroDocumento:0,
    Direccion: "",
    Telefono:0,
    Correo:"",
    Contrasena:"",
    TipoDocumento_idTipoDocumento:0,
    Ciudad_idCiudad:0,
    Docuento:"",
    Ciudad:""
  }


  constructor(private usuarioServicio: UsuarioService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.usuarioServicio.recuperarTodos().subscribe((result:any) => this.usuario = result);
  }

  alta() {
    this.usuarioServicio.alta(this.user).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/usuario']);
    });
  }

  baja(idUsuario:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.usuarioServicio.baja(idUsuario).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.usuarioServicio.recuperarTodos()
    .subscribe(result => this.usuario = result)
    });
  }
  }


    modificacion(id:number) {
      this.usuarioServicio.modificacion(this.user, id).subscribe(result=>this.usuario=result)
    }


  seleccionar(idUsuario:number) {
    this.usuarioServicio.seleccionar(idUsuario).subscribe((result:any) => this.user = result[0]);
  }


}
