import { createAction } from 'redux-actions';
import { RETRIEVE_ALBUMS, SUBMIT_WRITE, UPDATE_ALBUM, UPDATE_EDITOR, UPDATE_TITLE } from '../constants/write';

export const retrieveAlbums = createAction(RETRIEVE_ALBUMS);
export const submitWrite = createAction(SUBMIT_WRITE);
export const updateAlbum = createAction(UPDATE_ALBUM);
export const updateTitle = createAction(UPDATE_TITLE);
export const updateEditor = createAction(UPDATE_EDITOR);
