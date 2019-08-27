import { TestBed } from '@angular/core/testing';

import { OrderJsonDataService } from './order-json-data.service';

describe('OrderJsonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderJsonDataService = TestBed.get(OrderJsonDataService);
    expect(service).toBeTruthy();
  });
});
