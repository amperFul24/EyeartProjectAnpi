import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [NgClass, FormsModule,CommonModule, RouterLink],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit  {


  operacion = 'EditarUsuario'
  usuario: any ;
  id: number;

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
    Ciudad_idCiudad:0

  }

  constructor(private usuarioService: UsuarioService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idUsuario'));
  }


  recuperarTodos() {
    this.usuarioService.recuperarTodos().subscribe((result:any) => this.usuario = result);
  }

  alta() {
    this.usuarioService.alta(this.user).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idUsuario:number) {
    const eliminar = confirm("Deseas Eliminar este usuario?");
    if(eliminar){
    this.usuarioService.baja(idUsuario).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.usuarioService.recuperarTodos()
    .subscribe(result => this.usuario = result)
    });
  }
  }

  modificacion(id:number) {
    const editar = confirm("Deseas editar este Usuraio? ");
    if(editar){
    this.usuarioService.modificacion(this.user, id).subscribe(result=>this.usuario=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/usuario']);
    }
  }

  seleccionar(idUsuario:number) {
    this.usuarioService.seleccionar(idUsuario).subscribe((result:any) => this.user = result[0]);
  }

  ngOnInit(): void {
      this.user.idUsuario = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarUsuario';
  }

}
