import { Directive } from '@angular/core';
import { NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[nsFormItem]',
})
export class NsFormItemDirective {
  constructor() {}

  label: NzFormLabelComponent;

  formControl: NzFormControlComponent;

  setFormControl(formControl: NzFormControlComponent) {
    this.formControl = formControl;
    return this;
  }

  setLabel(label: NzFormLabelComponent) {
    this.label = label;
    return this;
  }
}
