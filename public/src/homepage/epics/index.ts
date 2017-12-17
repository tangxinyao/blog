import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { loginEpic } from './login';

const rootEpic = combineEpics(loginEpic);

export const epicMiddleware = createEpicMiddleware(rootEpic);
