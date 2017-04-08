import { TestBed, inject } from '@angular/core/testing';

import { ScenesService } from './scenes.service';

describe('ScenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenesService]
    });
  });

  it('should ...', inject([ScenesService], (service: ScenesService) => {
    expect(service).toBeTruthy();
  }));
});
