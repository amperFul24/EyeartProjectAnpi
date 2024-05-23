import { Component } from '@angular/core';
import { TipodocumentoService } from '../../../service/tipodocumento.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarTipoDocumentoComponent {
  documento:any;
  operacion = 'EditarDocumento'
  id: number;
  
  tipo={
    idTipoDocumento:0,
    Descripcion:""
  }


  constructor(private tipodocumentoService: TipodocumentoService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idTipoDocumento'));
  }


  recuperarTodos() {
    this.tipodocumentoService.recuperarTodos().subscribe((result:any) => this.tipo = result);
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

  baja(idTipoDocumento:number) {
    const eliminar = confirm("Deseas Eliminar este Tipo De Documento??");
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
    const editar = confirm("Deseas editar este Tipo De Documento? ");
    if(editar){
    this.tipodocumentoService.modificacion(this.tipo, id).subscribe(result=>this.documento=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/tipodocumento']);
    }
  }

  seleccionar(idTipoDocumento:number) {
    this.tipodocumentoService.seleccionar(idTipoDocumento).subscribe((result:any) => this.tipo = result[0]);
  }

  ngOnInit(): void {
      this.tipo.idTipoDocumento = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarDocumento';
  }

}