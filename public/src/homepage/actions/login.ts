import { createAction } from 'redux-actions';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export const loginFailure = createAction(LOGIN_FAILURE);
export const loginSuccess = createAction<{ token: string }>(LOGIN_SUCCESS);
export const login = createAction(LOGIN);
export const updateUsername = createAction<{ username: string }>(UPDATE_USERNAME);
export const updatePassword = createAction<{ password: string }>(UPDATE_PASSWORD);
