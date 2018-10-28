import { TestBed, inject } from '@angular/core/testing';

import { HttpGenericService } from './http-generic.service';

describe('HttpGenericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGenericService]
    });
  });

  it('should be created', inject([HttpGenericService], (service: HttpGenericService) => {
    expect(service).toBeTruthy();
  }));
});
