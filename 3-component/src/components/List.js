import React from 'react';
import {formatRelativeDate} from "../helpers.js";
import store from "../Store";

const List =({ data = [], onClick, hasIndex = false, hasDate = false, onRemove }) => {
    return (
        <ul className="list">
            {data.map((item, index) => {

                const handleClickRemove = (event, keyword) => {
                    event.stopPropagation();
                    onRemove(keyword);
                }

                return (
                    <li key={item.id} onClick={() => onClick(item.keyword)}>
                        {hasIndex && <span className="number">{index + 1}</span>}
                        <span>{item.keyword}</span>
                        {hasDate && (
                            <span className="date">{formatRelativeDate(item.date)}</span>
                        )}
                        {!!onRemove && (
                            <button
                                className="btn-remove"
                                onClick={(event) => handleClickRemove(event, item.keyword)}
                            />
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default List;