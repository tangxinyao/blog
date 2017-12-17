import { ActionsObservable } from 'redux-observable';
import * as Rx from 'rxjs';
import { TRANSPORT_LOGIN } from '../constants/login';

import { loginFailure, loginSuccess } from '../actions/login';

export function loginEpic(action$: ActionsObservable<any>, store: any) {
    return action$.ofType(TRANSPORT_LOGIN).mergeMap(() => {
        const params = store.getState().login.toJS();
        return Rx.Observable.ajax.post('/api/token', { username: params.username, password: params.password })
            .map((data) => loginSuccess(data.response.jwt)).catch(() => [loginFailure()]);
    });
}