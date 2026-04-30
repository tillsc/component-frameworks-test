import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';

const styles = `:host {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
  min-width: 20em;
}`;

const elementName = 'preact-custom-element-cdn-empty';

const PreactCdnEmpty = ({ text }) => {
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
    <small style="text-align: right; display: block;">Preact (from CDN)</small>
  </Fragment>;
};

register(PreactCdnEmpty, elementName, ['text'], { shadow: true });
