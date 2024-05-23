import { PedidoService } from '../../service/pedido.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
    pedido:any;
  
    ped={
      idPedido:0,
      Fecha:"yyyy-MM-dd",
      CodigoReferencia:0,
      Cantidad:0,
      Total:0,
      Carrito_idCarrito:0,
      MetodoPago_idMetodoPago:0,
      Descripcion:""
    }
  
  

    constructor(private pedidoServicio: PedidoService) {
      this.recuperarTodos();
    }
  
  
    recuperarTodos() {
      this.pedidoServicio.recuperarTodos().subscribe((result:any) => {
        this.pedido = result;
      });
      

    }
  
    alta() {
      this.pedidoServicio.alta(this.ped).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }
  
    baja(idPedido:number) {
      const eliminar = confirm("Deseas Eliminar esta fila?");
      if(eliminar){
      this.pedidoServicio.baja(idPedido).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
        alert("Se ha eliminado correctamente");
        this.pedidoServicio.recuperarTodos()
      .subscribe(result => this.pedido = result)
      });
    }
    }
  
 
    modificacion(id:number) {
      this.pedidoServicio.modificacion(this.ped, id).subscribe(result=>this.pedido=result) 
    }
  
    seleccionar(idPedido:number) {
      this.pedidoServicio.seleccionar(idPedido).subscribe((result:any) => this.ped = result[0]);
    }
  

}
