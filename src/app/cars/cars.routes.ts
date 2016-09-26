import { Route } from '@angular/router'

export const CarsRoutes: Route[] = [{
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
}, {
    path: '/list'
}, {
    path: '/create'
}, {
    path: '/modify/:id'
}];