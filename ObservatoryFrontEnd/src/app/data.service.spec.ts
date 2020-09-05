import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
beforeEach(async(() => {
    TestBed.configureTestingModule({
            imports: [
        
        ],
      declarations: [  ],
      providers: [DataService]
    })
    .compileComponents();
  }));
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
