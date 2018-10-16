import { TestBed, inject } from '@angular/core/testing';

import { VProductListService } from './v-product-list.service';
import { HttpClientModule } from "@angular/common/http"; 

describe('VProductListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VProductListService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([VProductListService], (service: VProductListService) => {
    expect(service).toBeTruthy();
  }));
});
