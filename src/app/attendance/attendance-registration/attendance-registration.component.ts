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
    console.log(date);
    const attendance: AttendanceModel = {
      employeeId: 1,
      action: 'entrada',
      date: date, // moment(date).format('YYYY/MM/DD HH:mm:ss'),
      // date: moment(date).tz('America/Lima').format('YYYY-MM-DD HH:mm:ss'),
      time: moment(date).format('HH:mm:ss')
    };
    console.log(attendance);
    this.attendanceService.create(attendance).subscribe(newAttendance => {
      console.log(newAttendance);
    });
  }
}
