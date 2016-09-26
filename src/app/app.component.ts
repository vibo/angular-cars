import { Component } from '@angular/core';
import '../../public/css/styles.css';
import './app.component.css';

@Component({
    selector: 'app',
    template: `
        <h1>Car application</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
