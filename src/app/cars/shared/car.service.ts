import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { Car } from './car.model'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CarService {
    public cars: Car[] = []; 

    constructor(private http: Http) {}

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    public getAll(): Promise<Car[]> {
        if (this.cars.length) {
            return new Promise((resolve, reject) => {
                resolve(this.cars);
            });
        }

        return this.http.get(`app/cars/shared/cars.mock.json`)
            .toPromise()
            .then(response => {
                this.cars = response.json();
                return this.cars;
            })
            .catch(this.handleError);
    }
}