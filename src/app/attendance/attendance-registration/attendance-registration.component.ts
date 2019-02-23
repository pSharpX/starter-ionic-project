import { Component, OnInit } from '@angular/core';
import { AttendanceGenericService } from '../attendance-generic-service';
import { AttendanceModel } from '../../core/model/attendance-model';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance-registration',
  templateUrl: './attendance-registration.component.html',
  styleUrls: ['./attendance-registration.component.scss']
})
export class AttendanceRegistrationComponent implements OnInit {
  constructor(private attendanceService: AttendanceGenericService) {}

  ngOnInit() {}

  createAttendance() {
    const date = new Date();
    const attendance: AttendanceModel = {
      employeeId: 3,
      action: 'entrada',
      date,
      time:  moment(date).format('HH:mm:ss')
    };
    this.attendanceService.create(attendance).subscribe((newAttendance) => {
      console.log(newAttendance);
    });
  }
}
