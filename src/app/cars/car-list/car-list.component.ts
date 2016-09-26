import { Component, OnInit } from '@angular/core'
import { Car } from '../shared/car.model'
import { CarService } from '../shared/car.service'

@Component({
    selector: 'car-list',
    template: `
        <h2>Car list</h2>

        <div *ngFor="let car of cars">
            {{ car.brand }} 
            {{ car.model }} 
            {{ car.color }}
            <button (click)="modify(car.id)">Modify</button>
            <button (click)="delete(car.id)">Delete</button>
        </div>
    `
})
export class CarListComponent implements OnInit {
    public cars: Car[] = [];

    constructor(
        private CarService: CarService
    ) {   
    }

    ngOnInit() {
        this.getCars();
    }

    private getCars(): Promise<Car[]> {
        return this.CarService
            .getAll()
            .then(cars => this.cars = cars);
    }

    public delete(id: number) {
        
    }

    public modify(id: number) {

    }
}
