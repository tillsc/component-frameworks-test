class EmptyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render(this.getAttribute('text'));
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'text') {
      this.render(newValue);
    }
  }

  render(text) {
    this.shadowRoot.textContent = text;
  }
}

customElements.define('vanilla-empty', EmptyComponent);
