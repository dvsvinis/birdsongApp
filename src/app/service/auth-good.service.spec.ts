import { TestBed } from '@angular/core/testing';

import { AuthGoodService } from './auth-good.service';

describe('AuthGoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGoodService = TestBed.get(AuthGoodService);
    expect(service).toBeTruthy();
  });
});
