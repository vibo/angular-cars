import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Car } from '../shared/car.model'

@Component({
    selector: 'car-form',
    template: `
        <form *ngIf="car">
            <div>
                <label for="brand">Brand</label>
                <input (keyup)="setBrand(brand.value)" [value]="car.brand" name="brand" #brand>
            </div>

            <div>
                <label for="model">Model</label>
                <input (keyup)="setModel(model.value)" [value]="car.model" name="model" #model>
            </div>

            <div>
                <label for="color">Color</label>
                <input (keyup)="setColor(color.value)" [value]="car.color" name="color" #color>
            </div>
        </form>
    `
})
export class CarFormComponent implements OnInit {
    @Input() car: Car;
    @Output() onSetBrand: EventEmitter<any> = new EventEmitter();
    @Output() onSetColor: EventEmitter<any> = new EventEmitter();
    @Output() onSetModel: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    setBrand(brand: string) {
        this.onSetBrand.emit(brand)
    }

    setModel(model: string) {
        this.onSetColor.emit(model)
    }

    setColor(color: string) {
        this.onSetModel.emit(color)
    }
}
