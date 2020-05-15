import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlCreatorService } from './form-control-creator.service';
import { InputModel } from './input-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
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
