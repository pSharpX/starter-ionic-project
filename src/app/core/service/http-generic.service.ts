import {Injectable} from '@angular/core';
import {HttpGeneric} from './http-generic';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ResponseModel} from '../model/response-model';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpGenericService<T> implements HttpGeneric<T> {

    constructor(private http: HttpClient) {
    }

    Get(url: any, id?: any): Observable<T> | Observable<any> {
        const $resource = this.resourceURI(url);
        return this.http.get($resource)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    return (<T>respModel.data) || respModel.error;
                }),
                catchError(this.handleError)
            );
    }

    GetAll(url: any): Observable<T[]> | Observable<any> {
        const $resource = this.resourceURI(url);
        return this.http.get($resource)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    return (<T[]>respModel.data) || respModel.error;
                }),
                catchError(this.handleError)
            );
    }

    Search(url: any, term?: any): Observable<T[]> {
        const $resource = this.resourceURI(url);
        return this.http.get($resource)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    return respModel.data.map(item => {
                        return <T>item;
                    });
                }),
                catchError(this.handleError)
            );
    }

    SearchFor(url: any, entity: T, stringify?: boolean): Observable<T> | Observable<any> {
        const $resource = this.resourceURI(url);
        let body: any = entity;
        if (stringify && stringify === true) {
            body = JSON.stringify(entity);
        }
        return this.http.post($resource, body)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    console.log(respModel);

                    return (respModel);
                }),
                catchError(this.handleError)
            );
    }

    Update(url: any, entity: T, stringify?: boolean): Observable<T> | Observable<any> {
        const $resource = this.resourceURI(url);
        let body: any = entity;
        if (stringify && stringify === true) {
            body = JSON.stringify(entity);
        }
        return this.http.put($resource, body)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    console.log(respModel);

                    return (respModel);
                }),
                catchError(this.handleError)
            );
    }

    Create(url: any, entity: T, stringify?: boolean): Observable<T> | Observable<any> {
        const $resource = this.resourceURI(url);
        let body: any = entity;
        if (stringify && stringify === true) {
            body = JSON.stringify(entity);
        }
        return this.http.post($resource, body)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    return (<T>respModel.data) || respModel.error;
                }),
                catchError(this.handleError)
            );
    }

    Delete(url: any, id?: any): Observable<boolean> {
        const $resource = this.resourceURI(url);
        return this.http.delete($resource)
            .pipe(
                map(this.handleResponse),
                map((respModel: ResponseModel) => {
                    return respModel.data;
                }),
                catchError(this.handleError)
            );
    }

    private resourceURI(url: any) {
        return `${environment.apiUrl}/${url}`;
    }

    private handleResponse(res: Response): ResponseModel {
        return {
            code: 200,
            success: true,
            error: {},
            message: 'success',
            data: (<any>res).data,
            paging: {},
        };
    }

    private handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return throwError(<ResponseModel>{
            code: error.status || 500,
            error: errMsg,
            success: false,
            data: {},
            message: errMsg,
            paging: {}
        });
    }
}
