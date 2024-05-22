import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';
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
export class EditarCarritoComponent implements OnInit {

  operacion = 'EditarCarrito'
  carrito: any;
  id: number;

  car = {
    idCarrito: 0,
    Usuario_idUsuario:0,
  }


  constructor(private carritoService: CarritoService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idCarrito'));
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

  modificacion(idCarrito:number) {
    const editar = confirm("Deseas editar este asignacion del carrito? ");
    if(editar){
    this.carritoService.modificacion(this.car, idCarrito).subscribe(result=>this.carrito=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/carrito']);
    }
  }

  seleccionar(idCarrito:number) {
    this.carritoService.seleccionar(idCarrito).subscribe((result:any) => this.car = result[0]);
  }

  ngOnInit(): void {
    this.car.idCarrito = this.id;
    this.seleccionar(this.id);
    this.operacion = 'EditarCarrito';
}

}
