import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cyberintechCheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CyberintechCheckboxComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() controlname: string;
  @Input() label: string;
  @Input() labelPosition = 'After';
  @Input() indeterminate: boolean;

  control: AbstractControl;
  constructor() { }

  ngOnInit() {
    this.control = this.group.controls[this.controlname];
  }

  hasError(): boolean {
    return !this.control.valid && this.control.touched;
  }

}
