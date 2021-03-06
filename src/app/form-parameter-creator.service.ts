import { Injectable } from '@angular/core';
import { InputModel } from './input-model';
import { DropDownInput } from './drop-down-input';
import { TextInput } from './text-input';
import { of } from 'rxjs';
import { CheckBoxInput } from './check-box-input';

@Injectable({
  providedIn: 'root'
})
export class FormParameterCreatorService {
  //TODO: get from a remote source of metadata
  getFormParameter() {

    let formParameters: InputModel<any>[][] = [

      [new TextInput({
        key: 'firstName1',
        label: 'First name 1',
        value: 'Tom',
        required: true,
        order: 1
      }),

      new TextInput({
        key: 'emailAddress1',
        label: 'Email 1',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextInput({
        key: 'phoneNumber1',
        label: 'Phone Number 1',
        type: 'number',
        order: 3
      }),
      new DropDownInput({
        key: 'brave1',
        label: 'City 1',
        options: [
          { key: 'daman', value: 'Daman' },
          { key: 'vapi', value: 'Vapi' },
          { key: 'pune', value: 'Pune' },
          { key: 'mumbai', value: 'Mumbai' }
        ],
        order: 4
      })],

      [new TextInput({
        key: 'firstName2',
        label: 'First name 2',
        value: 'Harrison',
        required: true,
        order: 1
      }),

      new TextInput({
        key: 'emailAddress2',
        label: 'Email 2',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextInput({
        key: 'phoneNumber2',
        label: 'Phone Number 2',
        type: 'number',
        order: 2
      }),
      new DropDownInput({
        key: 'brave2',
        label: 'City 2',
        options: [
          { key: 'barca', value: 'Barcelona' },
          { key: 'tokyo', value: 'Tokyo' },
          { key: 'shanghai', value: 'Shanghai' },
          { key: 'pattaya', value: 'Pattaya' }
        ],
        order: 3
      })]
    ];

    return of(formParameters);
  }
}
