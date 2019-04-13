import { Injectable } from '@angular/core';
import { AttendanceGenericService } from './attendance-generic-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AttendanceModel } from '../core/model/attendance-model';
import { HttpGenericService } from '../core/service/http-generic.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService implements AttendanceGenericService {
  private $controllerName = 'attendances';

  constructor(private http: HttpGenericService<any>) {}
  get(id?: any): Observable<AttendanceModel> {
    const $resource = `${this.$controllerName}/${id}`;
    return this.http.Get($resource).pipe(map(data => data.attendance));
  }

  getAll(): Observable<AttendanceModel[]> {
    const $resource = `${this.$controllerName}`;
    return this.http.GetAll($resource).pipe(map(data => data.attendances));
  }

  search(term?: any): Observable<AttendanceModel[]> {
    return undefined;
  }

  update(entity: AttendanceModel): Observable<AttendanceModel> {
    return undefined;
  }

  create(entity: AttendanceModel): Observable<AttendanceModel> {
    const $resource = `${this.$controllerName}/`;
    return this.http.Create($resource, entity);
  }

  delete(id?: any): Observable<boolean> {
    const $resource = `${this.$controllerName}/`;
    return this.http.Delete($resource, id);
  }

  deleteLast(): Observable<boolean> {
    const $resource = `${this.$controllerName}/undo`;
    return this.http.Delete($resource);
  }
}
