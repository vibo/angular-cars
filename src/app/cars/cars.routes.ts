import { Route } from '@angular/router'
import { CarListComponent } from './car-list/car-list.component'
import { CarCreateComponent } from './car-create/car-create.component'
import { CarModifyComponent } from './car-modify/car-modify.component'

export const CarsRoutes: Route[] = [{
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
}, {
    path: 'list',
    component: CarListComponent
}, {
    path: 'create',
    component: CarCreateComponent
}, {
    path: 'modify/:id',
    component: CarModifyComponent
}];