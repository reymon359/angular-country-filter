import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should use an observable to add values', inject([DataService], (service: DataService) => {
    spyOn(service['countryNameSource'], 'next').and.callThrough();
    service.changeCountryName('India');
    expect(service['countryNameSource'].next).toHaveBeenCalled();
  }));
});
