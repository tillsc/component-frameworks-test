import { h, Fragment } from 'preact';
import register from 'preact-custom-element';

const styles = `:host  {
  border: 1px solid red; 
  padding: 0.5em; 
}`

const PreactCustomElementEmpty = ({ text }) => {
  return <Fragment>
    <style>{styles}</style>
    {text}
  </Fragment>
}

register(PreactCustomElementEmpty, 'preact-custom-element-empty', ['text'], { shadow: true });
