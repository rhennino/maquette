import { TestBed } from '@angular/core/testing';

import { VariablesCommunesService } from './variables-communes.service';

describe('VariablesCommunesService', () => {
  let service: VariablesCommunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesCommunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
