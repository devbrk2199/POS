import { TestBed } from '@angular/core/testing';

import { SharedPropertyService } from './shared-property.service';

describe('SharedPropertyService', () => {
  let service: SharedPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
