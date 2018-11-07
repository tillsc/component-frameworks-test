(function () {
'use strict';

if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

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

}());
