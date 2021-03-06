import { Action } from 'redux-actions';
import { TRANSPORT_SEARCH, UPDATE_SEARCH } from '../constants/search';

export function searchReducer(state = '', action: Action<string>) {
    switch (action.type) {
        case TRANSPORT_SEARCH:
            return state;

        case UPDATE_SEARCH:
            return action.payload;

        default:
            return state;
    }
}
