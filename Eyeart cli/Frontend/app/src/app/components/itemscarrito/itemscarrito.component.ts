import { Component } from '@angular/core';
import { ItemscarritoService } from '../../service/itemscarrito.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itemscarrito',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './itemscarrito.component.html',
  styleUrl: './itemscarrito.component.css'
})
export class ItemscarritoComponent {
  carrito: any;

  item = {
    idItem:0,
    Usuario: "",
    Cantidad:0,
    Nombre:"",
    Precio:0,
    Total:0,
    Carrito_idCarrito:0,
    Producto_idProducto: 0,
  }
  
  constructor(private itemscarritoService:ItemscarritoService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.itemscarritoService.recuperarTodos().subscribe((result:any) => {
      this.carrito = result;
    });
  }
  
  baja(idItem:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.itemscarritoService.baja(idItem).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.itemscarritoService.recuperarTodos()
    .subscribe(result => this.carrito = result)
    });
  }
  }
  seleccionar(idItem:number) {
    this.itemscarritoService.seleccionar(idItem).subscribe((result:any) => this.item = result[0]);
  }
  }
