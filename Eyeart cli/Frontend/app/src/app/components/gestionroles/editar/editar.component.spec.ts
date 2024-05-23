import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGestionRolComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarGestionRolComponent;
  let fixture: ComponentFixture<EditarGestionRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarGestionRolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarGestionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
