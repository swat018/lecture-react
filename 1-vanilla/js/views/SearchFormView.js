import {qs} from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view"));

        this.resetElement = qs("[type=reset]", this.element)
        this.showResultButton(false)
    }

    showResultButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }
}