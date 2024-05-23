import { Component } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FontAwesomeModule ,FormsModule,CommonModule,RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario:any;

  user={
    idUsuario:null,
    Nombre:"",
    Apellido:"",
    NumeroDocumento:null,
    Direccion: "",
    Telefono:null,
    Correo:"",
    Contrasena:"",
    TipoDocumento_idTipoDocumento:null,
    Ciudad_idCiudad:null,
    Documento:"",
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
      alert("Se ha Registrado Correctamente");
      this.router.navigate(['/login']);
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

