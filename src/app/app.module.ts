import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { routes } from './app.routes'

import { CarsModule } from './cars/cars.module'

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpModule,
        CarsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ 
        AppComponent
    ]
})
export class AppModule { }
