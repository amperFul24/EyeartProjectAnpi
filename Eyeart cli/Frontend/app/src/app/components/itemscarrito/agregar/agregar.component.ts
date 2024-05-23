import { Component } from '@angular/core';
import { ItemscarritoService } from '../../../service/itemscarrito.service';
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
export class AgregarItemsCarritoComponent {

  carrito: any;

  item = {
    Cantidad:0,
    Carrito_idCarrito:0,
    Producto_idProducto: 0,
  }
  

  constructor(private itemscarritoService: ItemscarritoService , private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.itemscarritoService.recuperarTodos().subscribe((result:any) => this.carrito = result);
  }

  alta() {
    this.itemscarritoService.alta(this.item).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/itemscarrito']);
    });
  }

}

