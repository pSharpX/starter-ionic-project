import {Observable} from 'rxjs';

export interface GenericService<T> {
    get(id?: any): Observable<T>;
    getAll(): Observable<T[]>;
    search(term?: any): Observable<T[]>;
    update(entity: T): Observable<T>;
    create(entity: T): Observable<T>;
    delete(id?: any): Observable<boolean>;
}
