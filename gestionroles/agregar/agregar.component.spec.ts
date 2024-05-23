import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGestionRolComponent } from './agregar.component';

describe('AgregarGestionRolComponent', () => {
  let component: AgregarGestionRolComponent;
  let fixture: ComponentFixture<AgregarGestionRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarGestionRolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarGestionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
