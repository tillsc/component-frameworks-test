const elementName = 'vanilla-empty';

class EmptyComponent extends HTMLElement {

  constructor() {
    super();
    this.styles = ':host { display: inline-block; border: 1px solid red; padding: 0.5em; min-width: 20em; }';
    this.attachShadow({mode: 'open'});
    this._lastPing = null;
    this._onPing = (e) => { this._lastPing = e.detail; this.render(this.getAttribute('text')); };
  }

  connectedCallback() {
    window.addEventListener('framework-ping', this._onPing);
    this.shadowRoot.addEventListener('click', (e) => {
      console.log('click', e.target, e.target.dataset, e.target.dataset.ping);
      if (e.target.dataset.hasOwnProperty('ping')) {
        window.dispatchEvent(new CustomEvent('framework-ping', { detail: elementName, bubbles: true, composed: true }));
      }
    });
    this.render(this.getAttribute('text'));
  }

  disconnectedCallback() {
    window.removeEventListener('framework-ping', this._onPing);
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
    const lastPing = this._lastPing ? ` ← ${this._lastPing}` : '';
    this.shadowRoot.innerHTML = `
    <style>${this.styles}</style>
    ${text}<br>
    <button data-ping>Ping</button>${lastPing}`;
  }
}

customElements.define(elementName, EmptyComponent);
