import { Injectable } from '@angular/core';
import { InputModel } from './input-model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlCreatorService {

  constructor() { }
  toFormGroup(formGroupComponent: InputModel<string>[]) {
    let group: any = {};

    formGroupComponent.forEach(formElement => {
      group[formElement.key] = formElement.required ? new FormControl(formElement.value || '', Validators.required)
        : new FormControl(formElement.value || '');
    });
    return new FormGroup(group);
  }
}
