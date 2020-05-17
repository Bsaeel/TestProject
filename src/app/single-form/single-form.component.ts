import { Component, OnInit, Input } from '@angular/core';
import { FormControlCreatorService } from '../form-control-creator.service';
import { FormGroup } from '@angular/forms';
import { InputModel } from '../input-model';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent {

  @Input() element: InputModel<string>;
  @Input() form: FormGroup;
  
  
  get isValid() { return this.form.controls[this.element.key].valid; }

}
