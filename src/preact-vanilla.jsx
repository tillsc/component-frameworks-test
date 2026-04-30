import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { version } from './preact-version.js';

const elementName = 'preact-vanilla-empty';

function PreactEmptyInner({ text }) {
  const [lastPing, setLastPing] = useState(null);

  useEffect(() => {
    const handler = (e) => setLastPing(e.detail);
    window.addEventListener('framework-ping', handler);
    return () => window.removeEventListener('framework-ping', handler);
  }, []);

  const ping = () => window.dispatchEvent(new CustomEvent('framework-ping', {
    detail: elementName, bubbles: true, composed: true
  }));

  return <span>
    <style>:host  {'{'} display: inline-block; border: 1px solid red; padding: 0.5em; min-width: 20em; {'}'} </style>
    {text}<br/>
    <button onClick={ping}>Ping</button>
    {lastPing && <span> ← {lastPing}</span>}<br/>
    <small style="text-align: right; display: block;">Preact {version}</small>
  </span>;
}

class PreactEmpty extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    let text = this.getAttribute('text');
    render(<PreactEmptyInner text={text} />, mountPoint);
  }
}

customElements.define(elementName, PreactEmpty);
