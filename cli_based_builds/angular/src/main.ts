import { createApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularEmptyComponent } from './app/angular-empty/angular-empty.component';

(async () => {
  const app = await createApplication({
    providers: [provideZonelessChangeDetection()]
  });
  const el = createCustomElement(AngularEmptyComponent, { injector: app.injector });
  customElements.define('angular-empty', el);
})();
