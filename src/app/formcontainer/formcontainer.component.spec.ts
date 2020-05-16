import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontainerComponent } from './formcontainer.component';

describe('FormcontainerComponent', () => {
  let component: FormcontainerComponent;
  let fixture: ComponentFixture<FormcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
