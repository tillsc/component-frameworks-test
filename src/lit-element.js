import {LitElement, html} from '@polymer/lit-element';

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
    return html`${this.text}`;
  }

}

customElements.define('lit-element-empty', LitElementEmpty);
