import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { metodopagoService } from '../../../service/metodopago.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarMetodoPagoComponent {

  metodo:any;
  
  pago={
    idMetodoPago:0,
    Descripcion:""
  }



  constructor(private metodopagoService: metodopagoService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.metodopagoService.recuperarTodos().subscribe((result:any) => this.metodo = result);
  }

  alta() {
    this.metodopagoService.alta(this.pago).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/metodopago']);
    });
  }

  baja(idMetodoPago:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.metodopagoService.baja(idMetodoPago).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.metodopagoService.recuperarTodos()
    .subscribe(result => this.metodo = result)
    });
  }
  }


    modificacion(id:number) {
      this.metodopagoService.modificacion(this.pago, id).subscribe(result=>this.metodo=result)
    }


  seleccionar(idMetodoPago:number) {
    this.metodopagoService.seleccionar(idMetodoPago).subscribe((result:any) => this.pago = result[0]);
  }


}
