import { Action } from 'redux-actions';

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export enum LoginStatus {
    Failure,
    Initial,
    Pending,
    Success
}

export function loginReducer(state = { password: '', status: LoginStatus.Initial, username: '' }, action: Action<any>) {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: action.payload.password });

        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: action.payload.username });

        case LOGIN:
            return Object.assign({}, state, { status: LoginStatus.Pending });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, { status: LoginStatus.Failure });

        case LOGIN_FAILURE:
            return Object.assign({}, state, { status: LoginStatus.Failure });

        default:
            return state;
    }
}
