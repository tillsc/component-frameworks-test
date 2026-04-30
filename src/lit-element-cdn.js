import { LitElement, html, css } from 'https://esm.sh/lit@2';

class LitElementCdnEmpty extends LitElement {

  static properties = {
    text: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
      border: 1px solid red;
      padding: 0.5em;
    }
  `;

  render() {
    return html`${this.text}<br><small>Lit 2 (from CDN)</small>`;
  }

}

customElements.define('lit-element-cdn-empty', LitElementCdnEmpty);
