import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'

import { CarsModule } from './cars/cars.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CarsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
