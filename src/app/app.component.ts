import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyImputComponent } from './components/my-imput/my-imput.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,
   MyButtonComponent, MyImputComponent
  ],
})
export class AppComponent {
  constructor() {}
}
