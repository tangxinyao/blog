import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { loginEpic } from './login';
import { retrieveAlbumsEpic, uploadImageEpic } from './write';

const rootEpic = combineEpics(loginEpic, retrieveAlbumsEpic, uploadImageEpic);

export const epicMiddleware = createEpicMiddleware(rootEpic);
