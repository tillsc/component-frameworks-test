import { h, Fragment } from 'preact';
import register from 'preact-custom-element';
import { version } from './preact-version.js';

const styles = `:host  {
  display: inline-block;
  border: 1px solid red; 
  padding: 0.5em; 
}`

const PreactCustomElementEmpty = ({ text }) => {
  return <Fragment>
    <style>{styles}</style>
    {text}<br/><small>Preact {version}</small>
  </Fragment>
}

register(PreactCustomElementEmpty, 'preact-custom-element-empty', ['text'], { shadow: true });
