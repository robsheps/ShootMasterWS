import { TestBed, inject } from '@angular/core/testing';

import { NominationService } from './nomination.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NominationService]
    });
  });

  it('should be created', inject([NominationService], (service: NominationService) => {
    expect(service).toBeTruthy();
  }));
});
