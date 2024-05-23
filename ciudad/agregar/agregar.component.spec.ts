import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCiudadComponent } from './agregar.component';

describe('AgregarComponent', () => {
  let component: AgregarCiudadComponent;
  let fixture: ComponentFixture<AgregarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCiudadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
