import { TestBed } from '@angular/core/testing';

import { FormControlCreatorService } from './form-control-creator.service';

describe('FormControlCreatorService', () => {
  let service: FormControlCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
