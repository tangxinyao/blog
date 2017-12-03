import * as React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Action, Dispatch, Reducer } from 'redux';
import { transportAction, updateAction } from './action';

interface ISearchProps {
    search?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onSearch?: React.MouseEventHandler<HTMLSpanElement>;
}

const SearchView = (props: ISearchProps) => <div className="search">
    <input className="search-ipt" type="text" value={props.search} onChange={props.onChange} />
    <span className="search-btn fa fa-search" onClick={props.onSearch}></span>
</div>;

const mapState = (state: any) => {
    return { search: state.search };
};

const mapDispatch = (dispatch: Dispatch<Action>, ownProps: ISearchProps) => {
    return {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateAction(event.target.value));
        },
        onSearch: (event: React.MouseEvent<HTMLSpanElement>) => {
            dispatch(transportAction());
        }
    };
};

export const Search = connect(mapState, mapDispatch)(SearchView);
