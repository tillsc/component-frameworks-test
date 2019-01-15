import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-empty',
  styleUrl: 'stencil-empty.css'
})
export class StencilComponent {
  @Prop() text: string;

  render() {
    return <span class="foo">{this.text}</span>;
  }
}
