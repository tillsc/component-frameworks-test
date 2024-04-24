import {LitElement, html} from 'https://cdn.jsdelivr.net/npm/lit-element@4.0.5/+esm'
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
    <style>:host { border: 1px solid red; padding: 0.5em; }</style>
    ${this.text}
  `
  }

}

customElements.define('lit-element-empty', LitElementEmpty);

