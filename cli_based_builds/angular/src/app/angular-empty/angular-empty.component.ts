import { Component, Input, OnInit, OnDestroy, VERSION, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'angular-empty',
  templateUrl: './angular-empty.component.html',
  styleUrls: ['./angular-empty.component.css']
})
export class AngularEmptyComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  version = VERSION.full;
  lastPing = signal<string | null>(null);

  private onPing = (e: Event) => {
    this.lastPing.set((e as CustomEvent).detail);
  };

  ngOnInit() {
    window.addEventListener('framework-ping', this.onPing);
  }

  ngOnDestroy() {
    window.removeEventListener('framework-ping', this.onPing);
  }

  ping() {
    window.dispatchEvent(new CustomEvent('framework-ping', {
      detail: 'angular-empty', bubbles: true, composed: true
    }));
  }
}
