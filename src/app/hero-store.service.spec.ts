import { TestBed } from '@angular/core/testing';

import { HeroStoreService } from './hero-store.service';

describe('HeroStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroStoreService = TestBed.get(HeroStoreService);
    expect(service).toBeTruthy();
  });
});
