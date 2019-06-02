import { TestBed, inject } from '@angular/core/testing';

import { IdbdbOperationService } from './idbdb-operation.service';

describe('IdbdbOperationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdbdbOperationService]
    });
  });

  it('should be created', inject([IdbdbOperationService], (service: IdbdbOperationService) => {
    expect(service).toBeTruthy();
  }));
});
