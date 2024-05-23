import { Component, OnInit } from '@angular/core';
import { GestionrolService } from '../../../service/gestionrol.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarGestionRolComponent implements OnInit {

  operacion = 'EditarRol'
  gestion: any;
  id: number;

  rol = {
    Usuario_idUsuario:0,
    Nombre: "",
    Rol_idRol: 0
  }


  constructor(private gestionrolService: GestionrolService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('Usuario_idUsuario'));
  }


  recuperarTodos() {
    this.gestionrolService.recuperarTodos().subscribe((result:any) => this.gestion = result);
  }

  alta() {
    this.gestionrolService.alta(this.rol).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/gestionroles']);
    });
  }

  modificacion(Usuario_idUsuario:number) {
    const editar = confirm("Deseas editar este asignacion de rol? ");
    if(editar){
    this.gestionrolService.modificacion(this.rol, Usuario_idUsuario).subscribe(result=>this.gestion=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/gestionroles']);
    }
  }

  seleccionar(Usuario_idUsuario:number) {
    this.gestionrolService.seleccionar(Usuario_idUsuario).subscribe((result:any) => this.rol = result[0]);
  }

  ngOnInit(): void {
    this.rol.Usuario_idUsuario = this.id;
    this.seleccionar(this.id);
    this.operacion = 'EditarRol';
}

}

