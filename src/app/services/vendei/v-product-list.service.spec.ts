import { TestBed, inject } from '@angular/core/testing';

import { VProductListService } from './v-product-list.service';

describe('VProductListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VProductListService]
    });
  });

  it('should be created', inject([VProductListService], (service: VProductListService) => {
    expect(service).toBeTruthy();
  }));
});
