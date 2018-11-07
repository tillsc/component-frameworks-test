import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-empty',
 // styleUrl: 'my-first-component.css'
})
export class StencilComponent {
  @Prop() text: string;

  render() {
    return this.text;
  }
}
