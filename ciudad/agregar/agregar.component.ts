import { Component } from '@angular/core';
import { CiudadService } from '../../../service/ciudad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarCiudadComponent {
  ciudad:any;
  
  city={
    idCiudad:0,
    Descripcion:""
  }



  constructor(private ciudadService: CiudadService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.ciudadService.recuperarTodos().subscribe((result:any) => this.ciudad = result);
  }

  alta() {
    this.ciudadService.alta(this.city).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/ciudad']);
    });
  }

  baja(idCiudad:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.ciudadService.baja(idCiudad).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.ciudadService.recuperarTodos()
    .subscribe(result => this.ciudad = result)
    });
  }
  }


    modificacion(id:number) {
      this.ciudadService.modificacion(this.city, id).subscribe(result=>this.ciudad=result)
    }


  seleccionar(idCiudad:number) {
    this.ciudadService.seleccionar(idCiudad).subscribe((result:any) => this.city = result[0]);
  }


}

