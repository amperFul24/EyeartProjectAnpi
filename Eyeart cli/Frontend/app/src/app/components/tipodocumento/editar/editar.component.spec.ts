import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoDocumentoComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarTipoDocumentoComponent;
  let fixture: ComponentFixture<EditarTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoDocumentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
