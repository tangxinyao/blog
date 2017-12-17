import { fromJS } from 'immutable';
import { Action } from 'redux-actions';

import { LOGIN_FAILURE, LOGIN_SUCCESS, TRANSPORT_LOGIN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export enum LoginStatus {
    Failure,
    Initial,
    Pending,
    Success
}

export function loginReducer(state = fromJS({ password: '', status: LoginStatus.Initial, username: '' }), action: Action<any>) {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return state.mergeDeep({ password: action.payload.password });

        case UPDATE_USERNAME:
            return state.mergeDeep({ username: action.payload.username });

        case TRANSPORT_LOGIN:
            return state.mergeDeep({ status: LoginStatus.Pending });

        case LOGIN_SUCCESS:
            return state.mergeDeep({ status: LoginStatus.Success });

        case LOGIN_FAILURE:
            return state.mergeDeep({ status: LoginStatus.Failure });

        default:
            return state;
    }
}
