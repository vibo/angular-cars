import { Injectable } from '@angular/core'
import { Car } from './car.model'
import { cars } from './mock-cars'

@Injectable()
export class CarService {
    public cars: Car[] = []; 

    constructor() {}

    public getAll(): Promise<Car[]> {
        if (!this.cars.length) {
            this.cars = cars.slice();
        }

        return new Promise((resolve, reject) => {
            resolve(this.cars);
        });
    }
}