import { Component, OnInit } from '@angular/core';
import { AttendanceGenericService } from '../attendance-generic-service';
import { AttendanceModel } from '../../core/model/attendance-model';
import { tap } from 'rxjs/internal/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  public attendances: Array<AttendanceModel> = [];

  constructor(private attendanceService: AttendanceGenericService) {}

  ngOnInit() {
    this.attendanceService
      .getAll()
      .pipe(tap(console.log))
      .subscribe((data: Array<AttendanceModel>) => {
        this.attendances = data.sort((a, b) => {
          return moment(a.date).isBefore(b.date) ? 1 : -1;
        });
      });
  }
}
