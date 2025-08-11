import { Component,Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { IonApp, IonItem } from "@ionic/angular/standalone";


@Component({
  selector: 'app-my-button',
  standalone: true,
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
  imports: [MatButtonModule, IonApp, IonItem ]
})
export class MyButtonComponent  implements OnInit {

@Input() placeholder: string = '';  
@Input() type: 'button' | 'submit' | 'reset' = 'button';

  constructor() { }

  ngOnInit() {}

}
