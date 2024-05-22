import { Component } from '@angular/core';
import { NavbarComponent } from '../estructura/navbar/navbar.component';
import { FooterComponent } from '../estructura/footer/footer.component';
import { ProductoService } from '../../service/producto.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  producto: any;
  product = {
    idProducto:0,
    Nombre:'',
    DescripcionProducto:'',
    Precio:0,
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
