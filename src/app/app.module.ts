import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { routes } from './app.routes'

import { CarsModule } from './cars/cars.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routes),
        HttpModule,
        CarsModule,
        SharedModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ 
        AppComponent
    ]
})
export class AppModule { }
