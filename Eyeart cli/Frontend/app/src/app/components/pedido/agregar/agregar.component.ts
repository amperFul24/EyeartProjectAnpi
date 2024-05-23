import { Component } from '@angular/core';
import { PedidoService } from '../../../service/pedido.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  pedido:any;
  
  ped={
    idPedido:0,

    Fecha:"",
    CodigoReferencia:0,
    Cantidad:0,
    Total:0,
    Carrito_idCarrito:0,
    MetodoPago_idMetodoPago:0

  }

  constructor(private agregarPedidoServicio: PedidoService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.agregarPedidoServicio.recuperarTodos().subscribe((result:any) => this.pedido = result);
  }

  alta() {
    this.agregarPedidoServicio.alta(this.ped).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/pedido']);
    });
  }

  baja(idPedido:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.agregarPedidoServicio.baja(idPedido).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.agregarPedidoServicio.recuperarTodos()
    .subscribe(result => this.pedido = result)
    });
  }
  }


    modificacion(id:number) {
      this.agregarPedidoServicio.modificacion(this.ped, id).subscribe(result=>this.pedido=result) 
    }
  

  seleccionar(idPedido:number) {
    this.agregarPedidoServicio.seleccionar(idPedido).subscribe((result:any) => this.ped = result[0]);
  }


}
