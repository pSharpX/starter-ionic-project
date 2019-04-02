import { Component, OnInit, OnDestroy } from '@angular/core';
import { AttendanceGenericService } from '../attendance-generic-service';
import { AttendanceModel } from '../../core/model/attendance-model';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attendance-registration',
  templateUrl: './attendance-registration.component.html',
  styleUrls: ['./attendance-registration.component.scss']
})
export class AttendanceRegistrationComponent implements OnInit, OnDestroy {
  public createAttendanceSubs: Subscription;
  public undoAttendanceSubs: Subscription;
  constructor(private attendanceService: AttendanceGenericService) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    if (this.createAttendanceSubs) {
      this.createAttendanceSubs.unsubscribe();
    }
    if (this.undoAttendanceSubs) {
      this.undoAttendanceSubs.unsubscribe();
    }
  }

  createAttendance() {
    const date = new Date();
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

  undoAttendance() {
    this.undoAttendanceSubs = this.attendanceService
      .delete()
      .subscribe(attendance => {
        console.log(attendance);
      });
  }
}
