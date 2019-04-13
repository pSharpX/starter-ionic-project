import {Injectable} from '@angular/core';
import {AttendanceGenericService} from './attendance-generic-service';
import {from, Observable, of} from 'rxjs';
import {AttendanceModel} from '../core/model/attendance-model';
import * as faker from 'faker';
import * as moment from 'moment';
import {EmployeeModel} from '../core/model/employee-model';
import {mergeAll} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class MockAttendanceService implements AttendanceGenericService {
    private attendances: Array<AttendanceModel> = [];
    private employees: Array<EmployeeModel> = [];
    private $attendances: Observable<Array<AttendanceModel>>;
    private $employees: Observable<Array<EmployeeModel>>;

    constructor() {
        this.employees.push(this.mockEmployee());
        for (let i = 0; i < 20; i++) {
            this.attendances.push(this.mockAttendance(1));
        }
        this.$employees = of([this.employees])
            .pipe(mergeAll());
        this.$attendances = from([this.attendances]);
    }

    private mockAttendance(employeeId: number): AttendanceModel {
        const actions: Array<string> = ['entrada', 'salida'];
        const date = faker.date.recent();
        return {
            employeeId: 0,
            action: faker.random.arrayElement(actions),
            date,
            time: moment(date).format('HH:mm:ss'),
        };
    }

    private mockEmployee(): EmployeeModel {
        return {
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            position: faker.name.jobTitle(),
            birthday: faker.date.past(),
            dni: faker.random.alphaNumeric(),
        };
    }

    get(id?: any): Observable<AttendanceModel> {
        return null;
    }

    getAll(): Observable<AttendanceModel[]> {
        return this.$attendances;
    }

    search(term?: any): Observable<AttendanceModel[]> {
        return null;
    }

    update(entity: AttendanceModel): Observable<AttendanceModel> {
        return null;
    }

    create(entity: AttendanceModel): Observable<AttendanceModel> {
        return null;
    }

    delete(id?: any): Observable<boolean> {
        return null;
    }
    deleteLast(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }
}

