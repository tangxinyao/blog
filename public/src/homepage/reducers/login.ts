import { fromJS } from 'immutable';
import { Action } from 'redux-actions';

import { TRANSPORT_LOGIN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export function loginReducer(state = fromJS({ username: '', password: '' }), action: Action<any>) {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return state.mergeDeep({ password: action.payload.password });

        case UPDATE_USERNAME:
            return state.mergeDeep({ username: action.payload.username });

        default:
            return state;
    }
}
