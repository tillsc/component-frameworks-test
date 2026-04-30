import {LitElement, html} from 'lit-element';
import {version} from './lit-element-version.js';

const elementName = 'lit-element-empty';

class LitElementEmpty extends LitElement {

  static get properties() {
    return {
      text: {type: String},
      lastPing: {attribute: false}
    };
  }

  constructor() {
    super();
    this.text = '';
    this.lastPing = null;
    this._onPing = (e) => { this.lastPing = e.detail; };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('framework-ping', this._onPing);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('framework-ping', this._onPing);
  }

  _ping() {
    window.dispatchEvent(new CustomEvent('framework-ping', { detail: elementName, bubbles: true, composed: true }));
  }

  render() {
    return html`
    <style>:host { display: inline-block; border: 1px solid red; padding: 0.5em; min-width: 20em; }</style>
    ${this.text}<br>
    <button @click=${this._ping}>Ping</button>
    ${this.lastPing ? html`← ${this.lastPing}` : ''}<br>
    <small style="text-align: right; display: block;">Lit ${version}</small>
  `
  }

}

customElements.define(elementName, LitElementEmpty);
