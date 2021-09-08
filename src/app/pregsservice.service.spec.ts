import { TestBed } from '@angular/core/testing';

import { PregsserviceService } from './pregsservice.service';

describe('PregsserviceService', () => {
  let service: PregsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
