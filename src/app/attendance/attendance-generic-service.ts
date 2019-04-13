import { GenericService } from '../core/service/generic-service';
import { AttendanceModel } from '../core/model/attendance-model';
import { Observable } from 'rxjs';

export abstract class AttendanceGenericService
  implements GenericService<AttendanceModel> {
  abstract get(id?: any): Observable<AttendanceModel>;
  abstract getAll(): Observable<AttendanceModel[]>;
  abstract search(term?: any): Observable<AttendanceModel[]>;
  abstract update(entity: AttendanceModel): Observable<AttendanceModel>;
  abstract create(entity: AttendanceModel): Observable<AttendanceModel>;
  abstract delete(id?: any): Observable<boolean>;
  abstract deleteLast(): Observable<boolean>;
}
