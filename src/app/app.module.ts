import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleFormComponent } from './single-form/single-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { FormcontainerComponent } from './formcontainer/formcontainer.component';
import { FormControlCreatorService } from './form-control-creator.service';
import { FormParameterCreatorService } from './form-parameter-creator.service';

@NgModule({
  declarations: [
    AppComponent,
    SingleFormComponent,
    TextInputComponent,
    DropdownInputComponent,
    CheckboxInputComponent,
    FormcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormControlCreatorService, FormParameterCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
