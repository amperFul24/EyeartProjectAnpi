import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItemsCarritoComponent } from './agregar.component';

describe('AgregarItemsCarritoComponent', () => {
  let component: AgregarItemsCarritoComponent;
  let fixture: ComponentFixture<AgregarItemsCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarItemsCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarItemsCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
