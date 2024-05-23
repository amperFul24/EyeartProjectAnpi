import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoUnicoClientesComponent } from './producto-unico-clientes.component';

describe('ProductoUnicoClientesComponent', () => {
  let component: ProductoUnicoClientesComponent;
  let fixture: ComponentFixture<ProductoUnicoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoUnicoClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoUnicoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
