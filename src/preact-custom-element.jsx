import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';
import { version } from './preact-version.js';

const elementName = 'preact-custom-element-empty';

const styles = `:host  {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
  min-width: 20em;
}`

const PreactCustomElementEmpty = ({ text }) => {
  const [lastPing, setLastPing] = useState(null);

  useEffect(() => {
    const handler = (e) => setLastPing(e.detail);
    window.addEventListener('framework-ping', handler);
    return () => window.removeEventListener('framework-ping', handler);
  }, []);

  const ping = () => window.dispatchEvent(new CustomEvent('framework-ping', {
    detail: elementName, bubbles: true, composed: true
  }));

  return <Fragment>
    <style>{styles}</style>
    {text}<br/>
    <button onClick={ping}>Ping</button>
    {lastPing && <span> ← {lastPing}</span>}<br/>
    <small style="text-align: right; display: block;">Preact {version}</small>
  </Fragment>
}

register(PreactCustomElementEmpty, elementName, ['text'], { shadow: true });
