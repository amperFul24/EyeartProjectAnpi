import { Component } from '@angular/core';
import { CategoriaService } from '../../../service/categoria.service';
import { FooterComponent } from '../../estructura/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarCategoriaComponent {
  categoria: any;

  cate = {
    idCategoria:0,
    Descripcion:'',
  }
  

  constructor(private categoriaService: CategoriaService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.categoriaService.recuperarTodos().subscribe((result:any) => this.categoria = result);
  }

  alta() {
    this.categoriaService.alta(this.cate).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/categoria']);
    });
  }

}
