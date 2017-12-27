import { EditorState } from 'draft-js';
import * as Immutable from 'immutable';
import { createAction } from 'redux-actions';
import { Album } from '../components/parts/album';
import {
    ADD_ALBUM, REMOVE_ALBUM, RETRIEVE_ALBUMS, RETRIEVE_ALBUMS_FAILURE, RETRIEVE_ALBUMS_SUCCESS, SELECT_ALBUM,
    START_MENTION_SEARCH, STOP_MENTION_SEARCH, SUBMIT_WRITE, SUBMIT_WRITE_FAILURE, SUBMIT_WRITE_SUCCESS, TOGGLE_BLOCK_TYPE, TOGGLE_INLINE_STYLE,
    UPDATE_ALBUM, UPDATE_EDITOR_STATE, UPDATE_MENTION_SEARCH, UPDATE_TITLE, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_SUCCESS
} from '../constants/write';

export const retrieveAlbums = createAction(RETRIEVE_ALBUMS);
export const retrieveAlbumsFailure = createAction(RETRIEVE_ALBUMS_FAILURE);
export const retrieveAlbumsSuccess = createAction<{ albums: Immutable.Map<string, Album> }>(RETRIEVE_ALBUMS_SUCCESS);

export const submitWrite = createAction(SUBMIT_WRITE);
export const submitWriteFailure = createAction(SUBMIT_WRITE_FAILURE);
export const submitWriteSccuss = createAction(SUBMIT_WRITE_SUCCESS);

export const addAlbum = createAction(ADD_ALBUM);
export const removeAlbum = createAction<{ albumId: string }>(REMOVE_ALBUM);
export const selectAlbum = createAction<{ albumId: string }>(SELECT_ALBUM);
export const updateAlbum = createAction<{ albumContent: string }>(UPDATE_ALBUM);
export const updateTitle = createAction<{ title: string }>(UPDATE_TITLE);

export const toggleBlockType = createAction<{ blockType: string }>(TOGGLE_BLOCK_TYPE);
export const toggleInlineStyle = createAction<{ inlineStyle: string }>(TOGGLE_INLINE_STYLE);
export const updateEditorState = createAction<{ editorState: EditorState }>(UPDATE_EDITOR_STATE);

export const uploadImage = createAction<{ image: File }>(UPLOAD_IMAGE);
export const uploadImageFailure = createAction(UPLOAD_IMAGE_FAILURE);
export const uploadImageSuccess = createAction<{ imageUrl: string }>(UPLOAD_IMAGE_SUCCESS);

export const startMentionSearch = createAction<{ mentionSearch: string }>(START_MENTION_SEARCH);
export const updateMentionSearch = createAction<{ mentionSearch: string }>(UPDATE_MENTION_SEARCH);
export const stopMentionSearch = createAction<{ mentionSearch: string }>(STOP_MENTION_SEARCH);
