import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaritemsCarritoComponent } from './editar.component';

describe('EditaritemsCarritoComponent', () => {
  let component: EditaritemsCarritoComponent;
  let fixture: ComponentFixture<EditaritemsCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaritemsCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaritemsCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
