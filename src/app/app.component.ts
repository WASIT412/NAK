import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  frm: FormGroup;
  checkboxOptions: any = [
    { label: 'Admin Access Only', controlName: 'adminOnly' },
    { label: 'Require Password', controlName: 'reqPassword' },
    { label: 'Apply Login Timeout', controlName: 'loginTimeout' }
  ];
  data: any = [
    {State : 'J&K', ID: '1'},
    {State : 'Delhi', ID: '2'},
    {State : 'Haryana', ID: '3'},
    {State : 'Punjab', ID: '4'}
  ];

  constructor(private formBuilder: FormBuilder) {
     this.frm = this.formBuilder.group({
       email: new FormControl('', [Validators.required]),
       cb: new FormControl(),
       adminOnly: new FormControl(),
      reqPassword: new FormControl(),
      loginTimeout: new FormControl(),
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
//}
