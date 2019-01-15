import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class Polymer3Empty extends PolymerElement {
  static get template() {
    return html`
      <style>:host { border: 1px solid red; padding: 0.5em; }</style>
      {{text}}
    `;
  }
  static get properties() {
    return {
      text: {
        type: String
      },
    };
  }
}

window.customElements.define('polymer3-empty', Polymer3Empty);
