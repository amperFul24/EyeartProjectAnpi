import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { metodopagoService } from '../../../service/metodopago.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarMetodoPagoComponent {
  metodo:any;
  operacion = 'EditarMetodo'
  id: number;
  
  pago={
    idMetodoPago:0,
    Descripcion:""
  }


  constructor(private MetodopagoService: metodopagoService, private ActiveRoute: ActivatedRoute, private router: Router) {
    this.recuperarTodos();
    this.id = Number(ActiveRoute.snapshot.paramMap.get('idMetodoPago'));
  }


  recuperarTodos() {
    this.MetodopagoService.recuperarTodos().subscribe((result:any) => this.pago = result);
  }

  alta() {
    this.MetodopagoService.alta(this.pago).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Agregado Correctamente");
      this.router.navigate(['/metodopago']);
    });
  }

  baja(idMetodoPago:number) {
    const eliminar = confirm("Deseas Eliminar este Metodo de Pago??");
    if(eliminar){
    this.MetodopagoService.baja(idMetodoPago).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      alert("Se ha eliminado correctamente");
      this.MetodopagoService.recuperarTodos()
    .subscribe(result => this.metodo = result)
    });
  }
  }

  modificacion(id:number) {
    const editar = confirm("Deseas editar este Metodo de Pago? ");
    if(editar){
    this.MetodopagoService.modificacion(this.pago, id).subscribe(result=>this.metodo=result)
    alert("Se ha editado correctamente");
    this.router.navigate(['/metodopago']);
    }
  }

  seleccionar(idMetodoPago:number) {
    this.MetodopagoService.seleccionar(idMetodoPago).subscribe((result:any) => this.pago = result[0]);
  }

  ngOnInit(): void {
      this.pago.idMetodoPago = this.id;
      this.seleccionar(this.id);
      this.operacion = 'EditarMetodo';
  }

}

