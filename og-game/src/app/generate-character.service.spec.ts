import { TestBed } from '@angular/core/testing';

import { GenerateCharacterService } from './generate-character.service';

describe('GenerateCharacterService', () => {
  let service: GenerateCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
