import { TestBed } from '@angular/core/testing';

import { MicroLogisticsApiService } from './micro-logistics-api.service';

describe('MicroLogisticsApiService', () => {
  let service: MicroLogisticsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroLogisticsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
