import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Car } from '../shared/car.model'
import { CarService } from '../shared/car.service'

@Component({
    selector: 'car-create',
    template: `
        <h2>Create</h2>

        <car-form
            [car]="car"
            (onSetBrand)="setBrand($event)"
            (onSetColor)="setColor($event)"
            (onSetModel)="setModel($event)"
        >
        </car-form>

        <button (click)="create()">Create</button>
        <button (click)="close()">Close</button>
    `
})
export class CarCreateComponent implements OnInit {
    public car: Car = this.CarService.getModel();;

    constructor(
        private CarService: CarService,
        private Location: Location
    ) {
    }

    ngOnInit() {
    }

    public close() {
        this.Location.back();
    }

    public create() {
        this.CarService
            .create(this.car)
            .then(() => this.close());
    }

    public setBrand(brand: string) {
        this.car.brand = brand;
    }

    public setColor(color: string) {
        this.car.color = color;
    }

    public setModel(model: string) {
        this.car.model = model;
    }
}
