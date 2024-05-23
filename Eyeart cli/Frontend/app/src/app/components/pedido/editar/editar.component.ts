import {FormBuilder, FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PedidoService } from '../../../service/pedido.service';
import { PedidoComponent } from '../pedido.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [NgClass, FormsModule,CommonModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  operacion = 'Editar'
  pedido: any ;
  id: number;

  ped={
    idPedido:0,
    Fecha:"",
    Cantidad:0,
    Total:0,
    MetodoPago_idMetodoPago:0
  }

  constructor(private PedidoService: PedidoService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idPedido'));
  }


  recuperarTodos() {
    this.PedidoService.recuperarTodos().subscribe((result:any) => this.pedido = result);
  }

  alta() {
    this.PedidoService.alta(this.ped).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idPedido:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.PedidoService.baja(idPedido).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.PedidoService.recuperarTodos()
    .subscribe(result => this.pedido = result)
    });
  }
  }

  modificacion(id:number) {
    const editar = confirm("Deseas editar este pedido? ");
    if(editar){
    this.PedidoService.modificacion(this.ped, id).subscribe(result=>this.pedido=result) 
    alert("Se ha editado correctamente");
    this.router.navigate(['/pedido']);

    }
  }

  seleccionar(idPedido:number) {
    this.PedidoService.seleccionar(idPedido).subscribe((result:any) => this.ped = result[0]);
  }

  ngOnInit(): void {
      this.ped.idPedido = this.id;
      this.seleccionar(this.id);
      this.operacion = 'Editar';
  }

}
