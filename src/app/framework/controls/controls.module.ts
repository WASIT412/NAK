import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { CyberintechTextboxComponent } from './textbox/textbox.component';
import { CyberintechCheckboxComponent } from './checkbox/checkbox.component';
import { CyberintechCheckboxGroupComponent } from './checkbox/checkbox-group/checkbox-group.component';
import { CyberintechDropDownComponent } from './drop-down/drop-down.component';
import { CyberintechRadioButtonComponent } from './radio-button/radio-button.component';
import { CyberintechDatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
    imports: [
        MatIconModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule ],
    declarations: [
        CyberintechTextboxComponent,
        CyberintechCheckboxComponent,
        CyberintechCheckboxGroupComponent,
        CyberintechDropDownComponent,
        CyberintechRadioButtonComponent,
        CyberintechDatePickerComponent],
    exports: [
        CyberintechTextboxComponent,
        CyberintechCheckboxComponent,
        CyberintechCheckboxGroupComponent,
        CyberintechDropDownComponent,
        CyberintechRadioButtonComponent,
        CyberintechDatePickerComponent]
})
export class CyberintechControlsModule {
}
export { CyberintechTextboxComponent } from './textbox/textbox.component';
export { CyberintechCheckboxComponent } from './checkbox/checkbox.component';
export { CyberintechCheckboxGroupComponent } from './checkbox/checkbox-group/checkbox-group.component';
export { CyberintechDropDownComponent } from './drop-down/drop-down.component';
export { CyberintechRadioButtonComponent } from './radio-button/radio-button.component';
export { CyberintechDatePickerComponent } from './date-picker/date-picker.component';
