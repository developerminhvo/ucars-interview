import { ICar } from './models';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiClient {
    constructor(
        private _http: HttpClient
    ) {}

    public getCar(): Observable<ICar[]> {
        const url = ``;
        return this._http.get<ICar[]>(url);
    }
}