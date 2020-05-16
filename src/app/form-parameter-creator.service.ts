import { Injectable } from '@angular/core';
import { InputModel } from './input-model';
import { DropDownInput } from './drop-down-input';
import { TextInput } from './text-input';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormParameterCreatorService {
  //TODO: get from a remote source of metadata
  getFormParameter() {

    let formParameters: InputModel<string>[] = [



      new TextInput({
        key: 'firstName',
        label: 'First name',
        value: 'Saeel',
        required: true,
        order: 1
      }),

      new TextInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextInput({
        key: 'phoneNumber',
        label: 'Phone Number',
        type: 'number',
        order: 2
      }),
      new DropDownInput({
        key: 'brave',
        label: 'City',
        options: [
          { key: 'daman', value: 'Daman' },
          { key: 'vapi', value: 'Vapi' },
          { key: 'pune', value: 'Pune' },
          { key: 'mumbai', value: 'Mumbai' }
        ],
        order: 3
      }),
    ];

    return of(formParameters.sort((a, b) => a.order - b.order));
  }
}
