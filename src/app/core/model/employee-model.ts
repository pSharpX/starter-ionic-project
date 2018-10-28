import {BaseModel} from './base-model';

export interface EmployeeModel extends BaseModel {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    position: string;
    birthday: Date;
    dni: string;
}
