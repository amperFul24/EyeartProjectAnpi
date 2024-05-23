import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { FooterComponent } from '../estructura/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FooterComponent, RouterLink,CurrencyPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  producto: any;
  product = {
    idProducto:0,
    Nombre:'',
    DescripcionProducto:'',
    precio:0,
    stock:0,
    url_foto:'',
    Descripcion:""
  
  }
  categoria:any;
  
  constructor(private ProductosService:ProductoService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.ProductosService.recuperarTodos().subscribe((result:any) => {
      this.producto = result;
    });
  }
  
  baja(idProducto:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.ProductosService.baja(idProducto).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.ProductosService.recuperarTodos()
    .subscribe(result => this.producto = result)
    });
  }
  }
  seleccionar(id:number) {
    this.ProductosService.seleccionar(id).subscribe((result:any) => this.product = result[0]);
  }
  }
  
