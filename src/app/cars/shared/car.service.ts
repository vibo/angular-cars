import { Injectable } from '@angular/core'
import { Car } from './car.model'
import { cars } from './mock-cars'

@Injectable()
export class CarService {
    private idCounter: number = 3;

    public cars: Car[] = cars.slice();

    constructor() {}

    public create(car: Car): Promise<Car> {
        return new Promise((resolve, reject) => {
            car.id = ++this.idCounter;
            this.cars.push(car);
            resolve(car);
        });
    }

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

    public getModel(): Car {
        return new Car();
    }

    public modify(car: Car): Promise<boolean> {
        const id: number = car.id;
        const target: Car = this.cars.filter(car => id === car.id)[0];

        return new Promise((resolve, reject) => {
            if (EventTarget) {
                Object.assign(target, car);
                resolve(true);
            } else {
                reject(false);
            }
        });
    }
}