import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtValidators } from 'src/app/shared/ext-validators';

@Component({
  selector: 'app-form-auto-feedback',
  templateUrl: './form-auto-feedback.componnet.html',
})
export class FormAutoFeedBackComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: ['', []],
      userText: ['', [Validators.required]],
      userCode: ['', [Validators.required]],
      age: ['16'],
    });
  }

  submit(): void {
    for (const name in this.formGroup.controls) {
      if (this.formGroup.controls.hasOwnProperty(name)) {
        this.formGroup.controls[name].markAsDirty();
        this.formGroup.controls[name].updateValueAndValidity();
      }
    }
  }
}
