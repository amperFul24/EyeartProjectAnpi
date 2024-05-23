import { Component } from '@angular/core';
import { FooterComponent } from '../estructura/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [FooterComponent, RouterLink, CurrencyPipe],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categoria: any;

  category = {
    idCategoria:0,
    Descripcion:'',
  }
  
  constructor(private categoriaService:CategoriaService){
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.categoriaService.recuperarTodos().subscribe((result:any) => {
      this.categoria = result;
    });
  }
  
  baja(idCategoria:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.categoriaService.baja(idCategoria).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.categoriaService.recuperarTodos()
    .subscribe(result => this.categoria = result)
    });
  }
  }
  seleccionar(idCategoria:number) {
    this.categoriaService.seleccionar(idCategoria).subscribe((result:any) => this.category = result[0]);
  }
  }
