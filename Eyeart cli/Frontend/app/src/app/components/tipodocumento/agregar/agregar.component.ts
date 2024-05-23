import { Component } from '@angular/core';
import { TipodocumentoService } from '../../../service/tipodocumento.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarTipoDocumentoComponent {
  documento:any;
  
  tipo={
    idTipoDocumento:0,
    Descripcion:""
  }

  
  constructor(private tipodocumentoService: TipodocumentoService, private router: Router) {
    this.recuperarTodos();
  }


  recuperarTodos() {
    this.tipodocumentoService.recuperarTodos().subscribe((result:any) => this.documento = result);
  }

  alta() {
    this.tipodocumentoService.alta(this.tipo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/tipodocumento']);
    });
  }

  baja(idMetodoPago:number) {
    const eliminar = confirm("Deseas Eliminar esta fila?");
    if(eliminar){
    this.tipodocumentoService.baja(idMetodoPago).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.tipodocumentoService.recuperarTodos()
    .subscribe(result => this.documento = result)
    });
  }
  }


    modificacion(id:number) {
      this.tipodocumentoService.modificacion(this.tipo, id).subscribe(result=>this.documento=result)
    }


  seleccionar(idMetodoPago:number) {
    this.tipodocumentoService.seleccionar(idMetodoPago).subscribe((result:any) => this.tipo = result[0]);
  }


}

