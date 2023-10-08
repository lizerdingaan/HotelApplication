import { TestBed } from '@angular/core/testing';

import { ResevationService } from './resevation.service';

describe('ResevationService', () => {
  let service: ResevationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResevationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
