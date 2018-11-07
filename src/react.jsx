import ReactDOM from 'react-dom/umd/react-dom.production.min.js';

class ReactEmpty extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    let text = this.getAttribute("text");

    ReactDOM.render(<>{text}</>, mountPoint);
  }
}

customElements.define('react-empty', ReactEmpty);
