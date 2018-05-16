import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'cyberintechTextbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class CyberintechTextboxComponent implements OnInit {
  @Input() label: string;
  @Input() controlname: string;
  @Input() required: boolean;
  @Input() group: FormGroup;
  @Input() showClearButton: boolean;
  @Input() type = 'input';

  isRequired: boolean;
  control: AbstractControl;
  constructor() { }

  ngOnInit() {
  this.control = this.group.controls[this.controlname];
  }

  public getLabel(): string {
    if (this.control.validator) {
      const validator = this.control.validator(new FormControl());
      if (validator && validator.required) {
        this.isRequired = true;
        return this.label + ' *';
      }
    }
    this.isRequired = false;
    return this.label;
  }

  public clear(): void {
    this.control.reset();
    this.control.markAsTouched();
  }

  public clearKeyDownFunction(event) {
    if (event.keyCode === 13) {
      this.clear();
    }
  }
}
