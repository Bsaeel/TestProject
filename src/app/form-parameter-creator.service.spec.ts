import { TestBed } from '@angular/core/testing';

import { FormParameterCreatorService } from './form-parameter-creator.service';

describe('FormParameterCreatorService', () => {
  let service: FormParameterCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormParameterCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
