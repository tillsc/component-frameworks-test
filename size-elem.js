class SizeElm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    fetch(this.getAttribute('src')).then((response) => {
      console.log(response)
      return response.text();
    }).then((text) => {
      this.shadowRoot.textContent = (text.length / 1024).toPrecision(3) + ' kb';
    })
  }
}

customElements.define('size-elm', SizeElm);
