import { TestBed } from '@angular/core/testing';

import { EasterApiService } from './easter-api.service';

describe('EasterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasterApiService = TestBed.get(EasterApiService);
    expect(service).toBeTruthy();
  });
});
