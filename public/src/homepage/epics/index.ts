import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { transportLoginEpic } from './login';
import { uploadEditorImageEpic } from './write';

const rootEpic = combineEpics(transportLoginEpic, uploadEditorImageEpic);

export const epicMiddleware = createEpicMiddleware(rootEpic);
