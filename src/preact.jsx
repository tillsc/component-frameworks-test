import { h, render } from 'preact';

class PreactEmpty extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    let text = this.getAttribute('text');

    render(<span>
      <style>:host  {'{'} border: 1px solid red; padding: 0.5em; {'}'} </style>
      {text}
    </span>, mountPoint);
  }
}

customElements.define('preact-empty', PreactEmpty);
