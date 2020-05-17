import { Component, OnInit, Input } from '@angular/core';
import { InputModel } from '../input-model';
import { FormControlCreatorService } from '../form-control-creator.service';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formcontainer',
  templateUrl: './formcontainer.component.html',
  styleUrls: ['./formcontainer.component.css']
})
export class FormcontainerComponent implements OnInit {
  form: FormArray;
  payLoad: any = '';
  @Input() formGroupComponent: InputModel<string>[][] = [];

  constructor(private formControlCreatorService: FormControlCreatorService) {

  }
  ngOnInit() {
    this.form = this.formControlCreatorService.toFormGroup(this.formGroupComponent);
    console.log(this.formGroupComponent);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
