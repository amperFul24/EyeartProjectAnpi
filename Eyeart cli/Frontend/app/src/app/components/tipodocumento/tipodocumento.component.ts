import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TipodocumentoService } from '../../service/tipodocumento.service';

@Component({
  selector: 'app-tipodocumento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tipodocumento.component.html',
  styleUrl: './tipodocumento.component.css'
})
export class TipodocumentoComponent {
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
      this.router.navigate(['/metodopago']);
    });
  }

  baja(idTipoDocumento:number) {
    const eliminar = confirm("Deseas Eliminar esta este Tipo De Documento?");
    if(eliminar){
    this.tipodocumentoService.baja(idTipoDocumento).subscribe((datos:any) => {
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


  seleccionar(idTipoDocumento:number) {
    this.tipodocumentoService.seleccionar(idTipoDocumento).subscribe((result:any) => this.tipo = result[0]);
  }


}
