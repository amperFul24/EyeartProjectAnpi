import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { metodopagoService } from '../../service/metodopago.service';

@Component({
  selector: 'app-metodopago',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './metodopago.component.html',
  styleUrl: './metodopago.component.css'
})
export class MetodopagoComponent {

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
