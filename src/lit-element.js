import {LitElement, html} from 'lit-element';
import {version} from './lit-element-version.js';

class LitElementEmpty extends LitElement {

  static get properties() {
    return {
      text: {type: String}
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    return html`
    <style>:host { display: inline-block; border: 1px solid red; padding: 0.5em; }</style>
    ${this.text}<br><small>Lit ${version}</small>
  `
  }

}

customElements.define('lit-element-empty', LitElementEmpty);
