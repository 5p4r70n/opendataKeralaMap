import { TestBed } from '@angular/core/testing';

import { DistrictDataGenService } from './district-data-gen.service';


describe('DistrictDataGenService', () => {
  let service: DistrictDataGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictDataGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
