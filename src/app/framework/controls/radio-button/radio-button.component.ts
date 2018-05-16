import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { MatRadioButton, MatRadioChange } from '@angular/material';

@Component({
  selector: 'cyberintechRadioButton',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class CyberintechRadioButtonComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() controlname: string;
  @Input() text: string;
  @Input() value: string;
  @Input() options: Object;
  @Input() labelPosition = 'after';
  @Input() required: boolean;
  @Input() selected: MatRadioButton;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged: EventEmitter<MatRadioChange> =  new EventEmitter<MatRadioChange>();
  control: AbstractControl;
  constructor() { }

  ngOnInit() {
    this.control = this.group.controls[this.controlname];
  }
  onChange($event) {
    this.onChanged.emit($event);
  }

}
