import pako from 'pako';

const formatFileSize = (numberOfBytes) => {
  return (numberOfBytes / 1000).toPrecision(3) + ' kB';
}

class SizeElm extends HTMLElement {
  constructor() {
    super();
    this.em = document.createElement('em');
    this.attachShadow({ mode: 'open' }).appendChild(this.em);
  }

  connectedCallback() {
    fetch(this.getAttribute('src')).then((response) => {
      return response.text();
    }).then((text) => {
      let zip = pako.gzip(text);
      this.em.textContent = `${formatFileSize(text.length)},
        gz: ${formatFileSize(zip.length)}
        (-${100 - Math.round(100 * zip.length / text.length)}%)`;
    })
  }
}

customElements.define('size-elm', SizeElm);
