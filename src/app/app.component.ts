import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private _formBuilder:FormBuilder){}
profileForm=this._formBuilder.group({
  firstName:[''],
  lastName:[''],
  age:[''],
  email:[''],
  password:[''],
})
}
