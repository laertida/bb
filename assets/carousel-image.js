class CarouselImage extends HTMLElement {
  constructor() {
    super();
  }

  getSectionInnerHTML(html, selector = ".carousel-image") {
    return new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(selector).innerHTML;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const inner = this.getSectionInnerHTML(this.innerHTML);
    this.innerHTML = inner;
  }
}

customElements.define("carousel-image", CarouselImage);
