import { Component, Prop, State, Listen, h } from '@stencil/core';
import { version } from './stencil-version.js';

@Component({
  tag: 'stencil-empty',
  styleUrl: 'stencil-empty.css',
  shadow: true
})
export class StencilComponent {
  @Prop() text: string;
  @State() lastPing: string = null;

  @Listen('framework-ping', { target: 'window' })
  onFrameworkPing(event: CustomEvent) {
    this.lastPing = event.detail;
  }

  ping() {
    window.dispatchEvent(new CustomEvent('framework-ping', {
      detail: 'stencil-empty', bubbles: true, composed: true
    }));
  }

  render() {
    return <span>
      {this.text}<br/>
      <button onClick={() => this.ping()}>Ping</button>
      {this.lastPing && <span> ← {this.lastPing}</span>}<br/>
      <small style={{textAlign: 'right', display: 'block'}}>Stencil {version}</small>
    </span>;
  }
}
