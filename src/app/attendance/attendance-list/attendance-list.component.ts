import { Component, OnInit, OnDestroy } from '@angular/core';
import { AttendanceGenericService } from '../attendance-generic-service';
import { AttendanceModel } from '../../core/model/attendance-model';
import { tap } from 'rxjs/internal/operators';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit, OnDestroy {
  public attendances: Array<AttendanceModel> = [];
  public fetching = false;
  public attendanceSubs: Subscription;

  public onNext = (data: Array<AttendanceModel>) => {
    this.attendances = data.sort((a, b) => {
      return moment(a.date).isBefore(b.date) ? 1 : -1;
    });
  }
  public onError = error => console.log(error);
  public onComplete = () => {
    this.fetching = false;
  }

  constructor(private attendanceService: AttendanceGenericService) {}

  ngOnInit() {
    this.fetchAttendances();
  }

  ngOnDestroy(): void {
    if (this.attendanceSubs) {
      this.attendanceSubs.unsubscribe();
    }
  }

  fetchAttendances() {
    this.fetching = true;
    this.attendanceSubs = this.attendanceService
      .getAll()
      .pipe(tap(console.log))
      .subscribe(this.onNext, this.onError, this.onComplete);
  }
}
