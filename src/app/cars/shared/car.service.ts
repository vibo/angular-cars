import { Injectable } from '@angular/core'
import { Car } from './car.model'
import { cars } from './mock-cars'

@Injectable()
export class CarService {
    public cars: Car[] = cars.slice();

    constructor() {}

    public delete(id: number): Promise<Car[]> {
        return new Promise((resolve, reject) => {
            this.cars = this.cars.filter(car => id !== car.id);
            resolve(this.cars);
        });   
    }

    public get(id: number): Promise<Car> {
        return new Promise((resolve, reject) => {
            resolve(this.cars.filter(car => id === car.id)[0]);
        });
    }

    public getAll(): Promise<Car[]> {
        return new Promise((resolve, reject) => {
            resolve(this.cars.slice());
        });
    }
}