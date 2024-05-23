import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../estructura/footer/footer.component';
import { NavbarComponent } from '../../estructura/navbar/navbar.component';
import { ProductoService } from '../../../service/producto.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-producto-unico-clientes',
  standalone: true,
  imports: [FormsModule, RouterLink, FooterComponent, NavbarComponent, CurrencyPipe, ],
  templateUrl: './producto-unico-clientes.component.html',
  styleUrl: './producto-unico-clientes.component.css'
})
export class ProductoUnicoClientesComponent  implements OnInit {
  operacion = 'EditarProducto'
  producto: any ;
  id: number;

  product ={
      idProducto:0,
      Nombre:'',
      DescripcionProducto:'',
      Precio:0,
      Stock:0,
      url_foto:'',
      Categoria_idCategoria: 0
    }


    constructor(private productoService: ProductoService, private ActiveRoute: ActivatedRoute, private router: Router) {
      this.recuperarRand();
      this.id = Number(ActiveRoute.snapshot.paramMap.get('idProducto'));
    }


    recuperarTodos() {
      this.productoService.recuperarTodos().subscribe((result:any) => this.producto = result);
    }

    alta() {
      this.productoService.alta(this.product).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
        alert("Agregado Correctamente");
        this.router.navigate(['/producto']);
      });
    }

    modificacion(idProducto:number) {
      const editar = confirm("Deseas editar este Producto? ");
      if(editar){
      this.productoService.modificacion(this.product, idProducto).subscribe(result=>this.producto=result)
      alert("Se ha editado correctamente");
      this.router.navigate(['/producto']);
      }
    }

    seleccionar(idProducto:number) {
      this.productoService.seleccionar(idProducto).subscribe((result:any) => this.product = result[0]);
    }

    recuperarRand() {
      this.productoService.recuperarRand().subscribe((result:any) => {
        this.producto = result;
      });
    }

    ngOnInit(): void {
      this.product.idProducto = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarProducto';
  }

  }
