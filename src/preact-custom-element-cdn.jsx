import { h, Fragment } from 'preact';
import register from 'preact-custom-element';

const styles = `:host {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
}`;

const PreactCdnEmpty = ({ text }) => <Fragment>
  <style>{styles}</style>
  {text}<br/><small>Preact (from CDN)</small>
</Fragment>;

register(PreactCdnEmpty, 'preact-custom-element-cdn-empty', ['text'], { shadow: true });
