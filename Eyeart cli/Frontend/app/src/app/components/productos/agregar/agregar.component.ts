import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../estructura/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../service/categoria.service';
import { ProductoService } from '../../../service/producto.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarProductoComponent {
  producto : any;
  categoria : any;
  product ={
      id:0,
      Nombre:'',
      DescripcionProducto:'',
      Precio:0,
      Stock:0,
      Url_foto:'',
      Categoria_idCategoria: 0
    }
    

    constructor(private productoService: ProductoService, private router: Router, private CategoriasService:CategoriaService) {

      this.CategoriasService.recuperarTodos().subscribe((result:any) => this.categoria = result);
      this.recuperarTodos();

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
  
  }
  
