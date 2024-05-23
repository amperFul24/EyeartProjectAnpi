import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../estructura/footer/footer.component';
import { ProductoService } from '../../service/producto.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  producto: any;
  product = {
    idProducto:0,
    Nombre:'',
    DescripcionProducto:'',
    Precio:0,
    Stock:0,
    url_foto:'',
    Descripcion:""

  }
  categoria:any;

  constructor(private ProductosService:ProductoService){
    this.recuperarRand();
  }

  recuperarRand() {
    this.ProductosService.recuperarRand().subscribe((result:any) => {
      this.producto = result;
    });
  }

  seleccionar(id:number) {
    this.ProductosService.seleccionar(id).subscribe((result:any) => this.product = result[0]);
  }
  }

