import { Component, OnInit, Input } from '@angular/core';
import { InputModel } from '../input-model';
import { FormControlCreatorService } from '../form-control-creator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formcontainer',
  templateUrl: './formcontainer.component.html',
  styleUrls: ['./formcontainer.component.css']
})
export class FormcontainerComponent implements OnInit {
  form: FormGroup;
  payLoad: any = '';
  @Input() formGroupComponent: InputModel<string>[] = [];

  constructor(private formControlCreatorService: FormControlCreatorService) {

  }
  ngOnInit() {
    this.form = this.formControlCreatorService.toFormGroup(this.formGroupComponent);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
