import { Component, Prop, h } from '@stencil/core';
import { version } from './stencil-version.js';

@Component({
  tag: 'stencil-empty',
  styleUrl: 'stencil-empty.css',
  shadow: true
})
export class StencilComponent {
  @Prop() text: string;

  render() {
    return <span>{this.text}<br/><small>Stencil {version}</small></span>;
  }
}
