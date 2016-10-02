import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CarService } from '../shared/car.service'

import { Car } from '../shared/car.model'

@Component({
    selector: 'car-modify',
    template: `
        <h2>Modify</h2>
        
        <div *ngIf="car">
            <car-form 
                [car]="car"
                (onSetBrand)="setBrand($event)"
                (onSetColor)="setColor($event)"
                (onSetModel)="setModel($event)"
            >
            </car-form>

            <button (click)="modify()">Save</button>
            <button (click)="close()">Close</button>
        </div>
    `
})
export class CarModifyComponent implements OnInit {
    public car: Car;

    constructor(
        private route: ActivatedRoute,
        private CarService: CarService,
        private Location: Location
    ) {
    }

    ngOnInit() {
        this.route
            .params
            .forEach((params: Params) => {
                this.CarService
                    .get(Number(params['id']))
                    .then(car => this.car = Object.assign({}, car));
            });
    }

    public close() {
        this.Location.back();
    }

    public modify() {
        this.CarService
            .modify(this.car)
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
