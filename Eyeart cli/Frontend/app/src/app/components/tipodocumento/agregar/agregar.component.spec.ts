import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoDocumentoComponent } from './agregar.component';

describe('AgregarComponent', () => {
  let component: AgregarTipoDocumentoComponent;
  let fixture: ComponentFixture<AgregarTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTipoDocumentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
