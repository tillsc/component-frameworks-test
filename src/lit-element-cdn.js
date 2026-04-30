import { LitElement, html, css } from 'https://esm.sh/lit@2';

const elementName = 'lit-element-cdn-empty';

class LitElementCdnEmpty extends LitElement {

  static properties = {
    text: { type: String },
    lastPing: { attribute: false }
  };

  static styles = css`
    :host {
      display: inline-block;
      border: 1px solid red;
      padding: 0.5em;
      min-width: 20em;
    }
  `;

  constructor() {
    super();
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
    return html`${this.text}<br>
    <button @click=${this._ping}>Ping</button>
    ${this.lastPing ? html`← ${this.lastPing}` : ''}<br>
    <small style="text-align: right; display: block;">Lit 2 (from CDN)</small>`;
  }

}

customElements.define(elementName, LitElementCdnEmpty);
