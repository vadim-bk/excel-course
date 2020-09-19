export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('Method "getRoot" not be implemented');
  }

  afterRender() {}

  destroy() {}
}