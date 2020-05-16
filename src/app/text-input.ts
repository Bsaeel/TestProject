import { InputModel } from './input-model';

export class TextInput extends InputModel<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
