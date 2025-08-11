import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MyInputComponent } from 'src/app/components/my-input/my-input.component';
import { MyButtonComponent } from "src/app/components/my-button/my-button.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyInputComponent, MyButtonComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
