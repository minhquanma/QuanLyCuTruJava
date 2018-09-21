import { TestBed } from '@angular/core/testing';

import { CutruService } from './cutru.service';

describe('CutruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutruService = TestBed.get(CutruService);
    expect(service).toBeTruthy();
  });
});
