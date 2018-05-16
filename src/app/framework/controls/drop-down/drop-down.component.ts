import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'cyberintechDropdown',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class CyberintechDropDownComponent implements OnInit {

  @Input() public dataSource: Object;
  // @Input() public showClearButton: boolean;
  @Input() public label: string;
  @Input() public textField: string;
  @Input() public valueField: string;
  @Input() public controlname: string;
  @Input() public group: FormGroup;
 //  @Input() public disabled: boolean;
  // @Input() public allowFiltering: boolean;
  // @Input() public multipleSelect: boolean;
  @Input() public required: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onItemSelection: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('dropdownList') private dropdownList: any;

  public control: AbstractControl;
  public fields = {text: '', value: ''};

  constructor() { }

  ngOnInit() {
    if (this.dataSource !== undefined) {
      this.control = this.group.get(this.controlname);
      this.init();
    } else {
      throw new Error('Datasource not provided in dropdown');
    }

  }
  init(): void {
    if (this.textField !== undefined && this.valueField !== undefined) {
      this.fields.text = this.textField;
      this.fields.value = this.valueField;
    } else {
      throw new Error('Must supply textField and valueField attributes in cco-dropdown');
    }
  }
  onSelection($event): void {
    this.onItemSelection.emit($event);
  }

  // onBlur(): void {
  //   alert();
  //   this.control.markAsTouched();
  //   this.control.updateValueAndValidity();
  // }
  onItemSelect($event): void {
    this.onSelection($event);
  }
  // getLabel(): string {
  //   return this.hasValidatorRequired() ? `${this.label} *` : this.label;
  // }

  // private hasValidatorRequired(): boolean {
  //   if (!this.control) {
  //     this.control = this.group.get(this.controlname);
  //   }
  //   const validatorFn: ValidatorFn = this.control.validator;
  //   if (validatorFn) {
  //     const validationErrors: ValidationErrors = validatorFn({} as AbstractControl);
  //     if (validationErrors && validationErrors.required) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // private onSelect(val): void {
  //   this.group.controls[this.controlname].patchValue(val);
  //   this.control.markAsTouched();
  //   this.control.updateValueAndValidity();
  // }


  // hasError(): boolean {
  //   return !this.control.valid && this.control.touched;
  // }

  // public setEnabled(isEnabled: boolean) {
  //   this.dropdownList.enabled = isEnabled;
  // }

}
