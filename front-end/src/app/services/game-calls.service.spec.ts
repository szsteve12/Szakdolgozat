import { TestBed } from '@angular/core/testing';

import { GameCallsService } from './game-calls.service';

describe('GameCallsService', () => {
  let service: GameCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
