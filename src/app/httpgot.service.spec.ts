import { TestBed } from '@angular/core/testing';

import { HttpgotService } from './httpgot.service';

describe('HttpgotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpgotService = TestBed.get(HttpgotService);
    expect(service).toBeTruthy();
  });
});
