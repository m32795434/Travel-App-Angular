import { TestBed } from '@angular/core/testing';

import { GatitoService } from './gatito.service';

describe('GatitoService', () => {
  let service: GatitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
