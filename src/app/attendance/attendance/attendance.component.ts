import {Component, Input, OnInit} from '@angular/core';
import {AttendanceModel} from '../../core/model/attendance-model';
import * as moment from 'moment';

@Component({
    selector: 'app-attendance-item',
    templateUrl: './attendance.component.html',
    styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
    @Input()
    attendance: AttendanceModel;

    constructor() {
    }

    ngOnInit() {
    }

}
