import { Injectable } from '@angular/core';
import {AttendanceGenericService} from './attendance-generic-service';
import {Observable} from 'rxjs';
import {AttendanceModel} from '../core/model/attendance-model';
import {HttpGenericService} from '../core/service/http-generic.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService implements AttendanceGenericService {

    constructor(private http: HttpGenericService<any>) { }
    get(id?: any): Observable<AttendanceModel> {
        return undefined;
    }

    getAll(): Observable<AttendanceModel[]> {
        return undefined;
    }

    search(term?: any): Observable<AttendanceModel[]> {
        return undefined;
    }

    update(entity: AttendanceModel): Observable<AttendanceModel> {
        return undefined;
    }

    create(entity: AttendanceModel): Observable<AttendanceModel> {
        return undefined;
    }

    delete(id?: any): Observable<boolean> {
        return undefined;
    }
}
