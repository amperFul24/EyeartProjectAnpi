import { Component } from '@angular/core';
import { RolService } from '../../../service/rol.service';
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
export class AgregarRolComponent {
  roles: any;

  rol = {
    idRol:0,
    Descripcion:'',
  }
  

  constructor(private rolService: RolService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.rolService.recuperarTodos().subscribe((result:any) => this.roles = result);
  }

  alta() {
    this.rolService.alta(this.rol).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/rol']);
    });
  }

}
