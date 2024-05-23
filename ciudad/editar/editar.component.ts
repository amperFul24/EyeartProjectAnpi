import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../../../service/ciudad.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarCiudadComponent implements OnInit {
  ciudad:any;
  operacion = 'EditarCiudad'
  id: number;
  
  city={
    idCiudad:0,
    Descripcion:""
  }


  constructor(private ciudadService: CiudadService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idCiudad'));
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
    const eliminar = confirm("Deseas Eliminar este Ciudad?");
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
    const editar = confirm("Deseas editar esta Ciudad? ");
    if(editar){
    this.ciudadService.modificacion(this.city, id).subscribe(result=>this.ciudad=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/ciudad']);
    }
  }

  seleccionar(idCiudad:number) {
    this.ciudadService.seleccionar(idCiudad).subscribe((result:any) => this.city = result[0]);
  }

  ngOnInit(): void {
      this.city.idCiudad = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarCiudad';
  }

}

