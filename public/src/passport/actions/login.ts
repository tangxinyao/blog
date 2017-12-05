import { createAction } from 'redux-actions';
import { TRANSPORT_LOGIN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants/login';

export const updateUsername = createAction<{ username: string }>(UPDATE_USERNAME);
export const updatePassword = createAction<{ password: string }>(UPDATE_PASSWORD);
export const transportLogin = createAction(TRANSPORT_LOGIN);
