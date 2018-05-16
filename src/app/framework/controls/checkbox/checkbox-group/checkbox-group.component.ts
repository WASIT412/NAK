import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'cyberintechCheckboxGroup',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CyberintechCheckboxGroupComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() label: string;
  @Input() labelPosition: string;
  @Input() indeterminate: boolean;
  @Input() options: Checkbox[];
  @Input() rowDisplay = true;
  
  ngOnInit() {
  }

}
class Checkbox {

  constructor(
    public label: string,
    public controlName: string
  ) { }

}
