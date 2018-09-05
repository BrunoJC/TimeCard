import { TestBed, inject } from '@angular/core/testing';

import { AddFuncService } from './add-func.service';

describe('AddFuncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFuncService]
    });
  });

  it('should be created', inject([AddFuncService], (service: AddFuncService) => {
    expect(service).toBeTruthy();
  }));
});
