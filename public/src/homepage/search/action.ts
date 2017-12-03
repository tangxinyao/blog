import { createAction } from 'redux-actions';
import { TRANSPORT_SEARCH, UPDATE_SEARCH } from './constant';

export const transportAction = createAction(TRANSPORT_SEARCH);
export const updateAction = createAction<string>(UPDATE_SEARCH);
