import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../service/rol.service';
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
export class EditarRolComponent implements OnInit {

  operacion = 'EditarRol'
  roles: any;
  id: number;

  rol = {
    idRol:0,
    Descripcion:'',
  }


  constructor(private rolService: RolService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idRol'));
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

  modificacion(idRol:number) {
    const editar = confirm("Deseas editar este Rol? ");
    if(editar){
    this.rolService.modificacion(this.rol, idRol).subscribe(result=>this.roles=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/rol']);
    }
  }

  seleccionar(idRol:number) {
    this.rolService.seleccionar(idRol).subscribe((result:any) => this.rol = result[0]);
  }

  ngOnInit(): void {
    this.rol.idRol = this.id;
    this.seleccionar(this.id);
    this.operacion = 'EditarCategoria';
}

}

