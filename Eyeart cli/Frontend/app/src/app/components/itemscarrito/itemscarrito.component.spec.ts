import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscarritoComponent } from './itemscarrito.component';

describe('ItemscarritoComponent', () => {
  let component: ItemscarritoComponent;
  let fixture: ComponentFixture<ItemscarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemscarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemscarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
