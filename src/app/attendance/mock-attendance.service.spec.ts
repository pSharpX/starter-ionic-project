import { TestBed, inject } from '@angular/core/testing';

import { MockAttendanceService } from './mock-attendance.service';

describe('MockAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockAttendanceService]
    });
  });

  it('should be created', inject([MockAttendanceService], (service: MockAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
