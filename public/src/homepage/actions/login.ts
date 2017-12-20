import { createAction } from 'redux-actions';
import { LOGIN_FAILURE, LOGIN_SUCCESS, TRANSPORT_LOGIN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export const loginFailure = createAction(LOGIN_FAILURE);
export const loginSuccess = createAction<{ token: string }>(LOGIN_SUCCESS);
export const transportLogin = createAction(TRANSPORT_LOGIN);
export const updateUsername = createAction<{ username: string }>(UPDATE_USERNAME);
export const updatePassword = createAction<{ password: string }>(UPDATE_PASSWORD);
