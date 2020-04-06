import { TestBed } from '@angular/core/testing';

import { NavigationScreensService } from './navigation-screens.service';

describe('NavigationScreensService', () => {
  let service: NavigationScreensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationScreensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
