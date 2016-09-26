import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CarService } from './shared/car.service'
import { CarsComponent } from './cars.component'
import { CarListComponent } from './car-list/car-list.component'
import { CarCreateComponent } from './car-create/car-create.component'
import { CarModifyComponent } from './car-modify/car-modify.component'
import { CarFormComponent } from './car-form/car-form.component'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CarService
    ],
    declarations: [
        CarsComponent,
        CarListComponent,
        CarCreateComponent,
        CarModifyComponent,
        CarFormComponent
    ],
    exports: [
        CarsComponent
    ]
})
export class CarsModule {}
