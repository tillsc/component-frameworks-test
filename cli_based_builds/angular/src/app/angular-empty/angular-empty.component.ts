import { Component, Input, VERSION } from '@angular/core';

@Component({
  standalone: true,
  selector: 'angular-empty',
  templateUrl: './angular-empty.component.html',
  styleUrls: ['./angular-empty.component.css']
})
export class AngularEmptyComponent {
  @Input() text: string = '';
  version = VERSION.full;
}
