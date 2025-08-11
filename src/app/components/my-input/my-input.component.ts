
import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonInput} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-my-input',
  standalone: true,
  imports:[IonItem, IonInput,FormsModule],
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
})
export class MyInputComponent  implements OnInit {

  @Input() placeholder: string = ''; 
  @Input() type: string = 'text'; // tipo de input Ej: email, number etc...
  value: string = '';  // tipo de dato que recibe el input 

  constructor() { }

  ngOnInit() {}

}
