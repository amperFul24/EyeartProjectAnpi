import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCarritoComponent } from './editar.component';

describe('EditarCarritoComponent', () => {
  let component: EditarCarritoComponent;
  let fixture: ComponentFixture<EditarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
