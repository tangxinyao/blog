import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { transportAction, updateAction } from '../../../actions/search';

interface ISearchProps {
    search?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onSearch?: React.MouseEventHandler<HTMLSpanElement>;
}

function SearchView(props: ISearchProps) {
    return <div className="search">
        <input className="search-ipt" type="text" value={props.search} onChange={props.onChange} />
        <span className="search-btn fa fa-search" onClick={props.onSearch}></span>
    </div>;
}

function mapState(state: any) {
    return { search: state.search };
}

function mapDispatch(dispatch: Dispatch<Action<string>>) {
    return {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateAction(event.target.value));
        },
        onSearch: () => {
            dispatch(transportAction());
        }
    };
}

export const Search = connect(mapState, mapDispatch)(SearchView);
