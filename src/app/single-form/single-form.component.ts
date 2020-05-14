import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {

  @Input() hero;
  @Input() type;

  constructor() { }

  ngOnInit(): void {
  }

}
