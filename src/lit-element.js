import {LitElement, html} from 'lit-element';

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
