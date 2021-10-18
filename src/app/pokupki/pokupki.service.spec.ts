import { TestBed } from '@angular/core/testing';

import { PokupkiService } from './pokupki.service';

describe('PokupkiService', () => {
  let service: PokupkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokupkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
