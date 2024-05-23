import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMetodoPagoComponent } from './agregar.component';

describe('AgregarMetodoPagoComponent', () => {
  let component: AgregarMetodoPagoComponent;
  let fixture: ComponentFixture<AgregarMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMetodoPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
