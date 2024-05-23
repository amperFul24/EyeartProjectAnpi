import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCiudadComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarCiudadComponent;
  let fixture: ComponentFixture<EditarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCiudadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
