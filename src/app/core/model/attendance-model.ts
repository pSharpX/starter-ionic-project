import {BaseModel} from './base-model';

export interface AttendanceModel extends BaseModel {
    employeeId: number;
    action: string;
    date: string | Date;
    time: string;
}
