import { Component } from '@angular/core';
import { GestionrolService } from '../../../service/gestionrol.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarGestionRolComponent {
  gestion: any;

  rol = {
    Usuario_idUsuario:0,
    Rol_idRol: 0,

  }
  

  constructor(private gestionrolService: GestionrolService , private router: Router) {
    this.recuperarTodos();
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

}
