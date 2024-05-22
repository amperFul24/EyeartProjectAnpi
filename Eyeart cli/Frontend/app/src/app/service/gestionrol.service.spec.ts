import { TestBed } from '@angular/core/testing';

import { GestionrolService } from './gestionrol.service';

describe('GestionrolService', () => {
  let service: GestionrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
