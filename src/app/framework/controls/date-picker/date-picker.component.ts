import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cyberintechDatePicker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class CyberintechDatePickerComponent implements OnInit {
  @Input() public controlname: string;
  @Input() public group: FormGroup;

  control: AbstractControl;
  constructor() { }

  ngOnInit() {
  }

}
