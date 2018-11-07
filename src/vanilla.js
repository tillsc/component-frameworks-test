class EmptyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.textContent = this.getAttribute('text');
  }
}

customElements.define('vanilla-empty', EmptyComponent);
