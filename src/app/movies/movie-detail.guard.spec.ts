import { TestBed } from '@angular/core/testing';

import { MovieDetailGuard } from './movie-detail.guard';

describe('MovieDetailGuard', () => {
  let guard: MovieDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
