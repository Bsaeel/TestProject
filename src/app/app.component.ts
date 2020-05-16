import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlCreatorService } from './form-control-creator.service';
import { InputModel } from './input-model';
import { Observable } from 'rxjs';
import { FormParameterCreatorService } from './form-parameter-creator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  formGroupComponent$: Observable<InputModel<any>[]>;

  constructor(service: FormParameterCreatorService) {
    this.formGroupComponent$ = service.getFormParameter();
  }
}
