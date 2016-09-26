import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CarService } from '../shared/car.service'

import { Car } from '../shared/car.model'

@Component({
    selector: 'car-modify',
    template: `
        <div *ngIf="car">
            <car-form 
                [car]="car"
                (onSetBrand)="setBrand($event)"
                (onSetColor)="setColor($event)"
                (onSetModel)="setModel($event)"
            >
            </car-form>
        </div>
    `
})
export class CarModifyComponent implements OnInit {
    public car: Car;

    constructor(
        private route: ActivatedRoute,
        private CarService: CarService
    ) {
    }

    ngOnInit() {
        this.route
            .params
            .forEach((params: Params) => {
                this.CarService
                    .get(Number(params['id']))
                    .then(car => this.car = car);
            });
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
