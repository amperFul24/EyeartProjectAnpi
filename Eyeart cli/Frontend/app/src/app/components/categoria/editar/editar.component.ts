import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../estructura/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../service/categoria.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarCategoriaComponent implements OnInit{

  operacion = 'EditarCategoria'
  categoria: any;
  id: number;

  cate = {
    idCategoria:0,
    Descripcion:'',
  }


  constructor(private categoriaService: CategoriaService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idCategoria'));
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

  modificacion(idCategoria:number) {
    const editar = confirm("Deseas editar este Categoria? ");
    if(editar){
    this.categoriaService.modificacion(this.cate, idCategoria).subscribe(result=>this.categoria=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/categoria']);
    }
  }

  seleccionar(id:number) {
    this.categoriaService.seleccionar(id).subscribe((result:any) => this.cate = result[0]);
  }

  ngOnInit(): void {
    this.cate.idCategoria = this.id;
    this.seleccionar(this.id);
    this.operacion = 'EditarCategoria';
}

}

