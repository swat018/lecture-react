import React from "react"
import store from "../store.js"
import List from "./List.js"
import { formatRelativeDate } from "../helpers.js"



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

    handleClickRemoveHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        this.fetch();
    }

    render() {
        return (
            <List
                data={this.state.historyList}
                onClick={this.props.onClick}
                renderItem={(item) => {
                    return(
                    <>
                        <span>{item.keyword}</span>
                        <span className="date">{formatRelativeDate(item.date)}</span>
                        <button
                            className="btn-remove"
                            onClick={event => this.handleClickRemoveHistory(event, item.keyword)}
                        />
                    </>
                    );
                }}
            />
        );
    }
}