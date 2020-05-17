import { Injectable } from '@angular/core';
import { InputModel } from './input-model';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class FormControlCreatorService {

  constructor() { }
  toFormGroup(formGroupComponent: InputModel<string>[][]) {
    let formArr = new FormArray([]);
    let group: any = {};









    formGroupComponent.forEach(formGroup => { 
      console.log(formGroup);
      formGroup.forEach(
      formElement => {
        group[formElement.key] = formElement.required ? new FormControl(formElement.value || '', Validators.required)
          : new FormControl(formElement.value || '');
          
      })
      let testGroup= new FormGroup(group);
      console.log(testGroup);
      formArr.push(testGroup);
    });

    // formGroupComponent.forEach(formElement => {
    //   group[formElement.key] = formElement.required ? new FormControl(formElement.value || '', Validators.required)
    //     : new FormControl(formElement.value || '');
    // });
    return formArr;
  }
}
