import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'cyberintech-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'app';
  frm: FormGroup;
  radioOptions: any = [
    { label: 'Male', controlName: 'male' },
    { label: 'Female', controlName: 'female' },
  ];
  data: any = [
    {State : 'Andhra Pradesh', ID: '1'},
    {State : 'Delhi', ID: '2'},
    {State : 'Haryana', ID: '3'},
    {State : 'Punjab', ID: '4'},
    {State : 'J&K', ID: '5'},
    {State : 'Gurjat', ID: '6'},
    {State : 'Marashtra', ID: '7'},
    {State : 'Orissa', ID: '8'},
    {State : 'Bihar', ID: '9'},
    {State : 'Utter Pradesh', ID: '10'},
    {State : 'Kolkata', ID: '11'},
    {State : 'Jaharkand', ID: '12'},
    {State : 'Madya Pradesh', ID: '13'},
    {State : 'Tamil Nadu', ID: '14'},
    {State : 'Karnataka', ID: '15'},
    {State : 'Rajastan', ID: '16'}
  ];

  constructor(private formBuilder: FormBuilder) {
     this.frm = this.formBuilder.group({
       email: new FormControl('', [Validators.required]),
       username: new FormControl('', [Validators.required]),
       male: new FormControl(),
       female: new FormControl(),

      dropdown: new FormControl(),
      radiobutton: new FormControl(),
      datePick: new FormControl()
      });
   }

   onSelection($event) {
console.log($event);
   }
   radioChanged($event) {
    console.log($event);
   }

}
