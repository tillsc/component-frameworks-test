import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-empty',
  templateUrl: './angular-empty.component.html',
  styleUrls: ['./angular-empty.component.css']
})
export class AngularEmptyComponent {
  @Input() text: String;
  constructor() { }

}
