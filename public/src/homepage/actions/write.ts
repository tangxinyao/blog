import { EditorState } from 'draft-js';
import { createAction } from 'redux-actions';
import { RETRIEVE_ALBUMS, START_MENTION_SEARCH, STOP_MENTION_SEARCH, SUBMIT_WRITE, UPDATE_ALBUM, UPDATE_EDITOR_STATE, UPDATE_MENTION_SEARCH, UPDATE_TITLE } from '../constants/write';

export const retrieveAlbums = createAction<{ albums: string[] }>(RETRIEVE_ALBUMS);
export const submitWrite = createAction(SUBMIT_WRITE);
export const updateAlbum = createAction<{ album: string }>(UPDATE_ALBUM);
export const updateEditorState = createAction<{ editorState: EditorState }>(UPDATE_EDITOR_STATE);
export const updateTitle = createAction<{ title: string }>(UPDATE_TITLE);

export const updateMentionSearch = createAction<{ mentionSearch: string }>(UPDATE_MENTION_SEARCH);
export const startMentionSearch = createAction<{ mentionSearch: string }>(START_MENTION_SEARCH);
export const stopMentionSearch = createAction<{ mentionSearch: string }>(STOP_MENTION_SEARCH);
