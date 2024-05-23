import { Component, OnInit } from '@angular/core';
import { ItemscarritoService } from '../../../service/itemscarrito.service';
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
export class EditaritemsCarritoComponent implements OnInit {

  operacion = 'EditarItems'
  carrito: any;
  id: number;

  item = {
    idItem:0,
    Cantidad:0,
    Precio:0,
    Total:0,
    Carrito_idCarrito:0,
    Producto_idProducto: 0,
  }


  constructor(private itemscarritoService: ItemscarritoService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idItem'));
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

  modificacion(idItem:number) {
    const editar = confirm("Deseas editar estos items en el carrito? ");
    if(editar){
    this.itemscarritoService.modificacion(this.item, idItem).subscribe(result=>this.carrito=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/itemscarrito']);
    }
  }

  seleccionar(idItem:number) {
    this.itemscarritoService.seleccionar(idItem).subscribe((result:any) => this.item = result[0]);
  }

  ngOnInit(): void {
    this.item.idItem = this.id;
    this.seleccionar(this.id);
    this.operacion = 'EditarItems';
}

}