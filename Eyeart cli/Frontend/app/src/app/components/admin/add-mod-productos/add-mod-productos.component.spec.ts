import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModProductosComponent } from './add-mod-productos.component';

describe('AddModProductosComponent', () => {
  let component: AddModProductosComponent;
  let fixture: ComponentFixture<AddModProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddModProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
