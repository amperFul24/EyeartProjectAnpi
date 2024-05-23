import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../estructura/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../service/categoria.service';
import { ProductoService } from '../../../service/producto.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarProductoComponent implements OnInit {
  operacion = 'EditarProducto'
  producto: any ;
  id: number;

  product ={
      idProducto:0,
      Nombre:'',
      DescripcionProducto:'',
      Precio:0,
      Stock:0,
      Url_foto:'',
      Categoria_idCategoria: 0
    }
    

    constructor(private productoService: ProductoService, private ActiveRoute: ActivatedRoute, private router: Router) {
      this.recuperarTodos();
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

    ngOnInit(): void {
      this.product.idProducto = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarProducto';
  }
  
  }
  
