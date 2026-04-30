import { h, render } from 'preact';
import { version } from './preact-version.js';

class PreactEmpty extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    let text = this.getAttribute('text');

    render(<span>
      <style>:host  {'{'} display: inline-block; border: 1px solid red; padding: 0.5em; {'}'} </style>
      {text}<br/><small>Preact {version}</small>
    </span>, mountPoint);
  }
}

customElements.define('preact-vanilla-empty', PreactEmpty);
