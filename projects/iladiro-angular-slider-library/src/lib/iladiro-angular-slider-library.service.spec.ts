import { TestBed } from '@angular/core/testing';

import { IladiroAngularSliderLibraryService } from './iladiro-angular-slider-library.service';

describe('IladiroAngularSliderLibraryService', () => {
  let service: IladiroAngularSliderLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IladiroAngularSliderLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
