import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito: any;

  car = {
    idCarrito: 0,
    Nombre: "",
    Usuario_idUsuario:0,
  }
  
  constructor(private carritoService: CarritoService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.carritoService.recuperarTodos().subscribe((result:any) => {
      this.carrito = result;
    });
  }
  
  baja(idCarrito:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.carritoService.baja(idCarrito).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.carritoService.recuperarTodos()
    .subscribe(result => this.carrito = result)
    });
  }
  }
  seleccionar(idCarrito:number) {
    this.carritoService.seleccionar(idCarrito).subscribe((result:any) => this.car = result[0]);
  }
  }
