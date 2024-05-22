import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarCarritoComponent {
  carrito: any;

  car = {
    idCarrito: 0,
    Usuario_idUsuario:0,
  }
  

  constructor(private carritoService: CarritoService , private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.carritoService.recuperarTodos().subscribe((result:any) => this.carrito = result);
  }

  alta() {
    this.carritoService.alta(this.car).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/carrito']);
    });
  }
}