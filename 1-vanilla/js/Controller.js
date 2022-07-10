const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;

    // TODO
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) =>
        this.search(event.detail.value));
  }

  search(keyword) {
    console.log(tag, keyword);

  }
}
