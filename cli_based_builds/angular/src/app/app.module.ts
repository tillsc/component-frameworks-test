import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AngularEmptyComponent } from './angular-empty/angular-empty.component';

@NgModule({
  declarations: [
    AngularEmptyComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ AngularEmptyComponent ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(AngularEmptyComponent, { injector });
    customElements.define('angular-empty', el);
  }

  ngDoBootstrap() {}
 }
