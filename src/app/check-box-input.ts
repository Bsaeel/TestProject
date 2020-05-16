import { InputModel } from './input-model';

export class CheckBoxInput extends InputModel<boolean>{

    controlType = 'checkbox';
    type: string;
    constructor(options: {} = {}) {
        super(options)
        this.type = 'checkbox';
    }
}
