import React from "react"
import store from "../store.js"
import List from "./List.js"

export default class HistoryList extends React.Component {
    constructor() {
        super();

        this.state = {
            historyList: [],
        }
    }

    componentDidMount() {
        const historyList = store.getHistoryList();

        this.setState({ historyList });
    }

    fetch() {
        const historyList = store.getHistoryList();
        this.setState({ historyList });
    }

    handleClickRemove(keyword) {
        store.removeHistory(keyword);
        this.fetch();
    }

    render() {
        const { onClick } = this.props;
        const { historyList } = this.state;

        return (
            <List
                hasDate
                data={historyList}
                onClick={onClick}
                onRemove={(keyword) => this.handleClickRemove(keyword)}
            />
        );
    }
}