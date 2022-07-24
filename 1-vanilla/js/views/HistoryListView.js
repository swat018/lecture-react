import KeywordListView from "./KeywordListView.js";
import {formatRelativeDate, qs} from "../helpers.js";

export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs('#history-list-view'), new Template());
    }
}

class Template {
    getList(data = []) {
        return `
            <ul class="list">
                ${data.map(this._getItem).join("")}
            </ul>
        `
    }

    getEmptyMessage() {
        return `<div class="empty-box">검색 이력이 없습니다.</div>`;
    }

    _getItem({keyword, date }) {
        return `
            <li data-keyword="${keyword}">
                ${keyword}
                <span class="date">${formatRelativeDate(date)}</span>
                <button class="btn-remove"></button>
            </li>
        `
    }
}