import { EditorState } from 'draft-js';
import { createAction } from 'redux-actions';
import {
    RETRIEVE_ALBUMS, START_MENTION_SEARCH, STOP_MENTION_SEARCH, SUBMIT_WRITE, TOGGLE_BLOCK_TYPE, TOGGLE_INLINE_STYLE,
    UPDATE_ALBUM, UPDATE_EDITOR_STATE, UPDATE_MENTION_SEARCH, UPDATE_TITLE, UPLOAD_EDITOR_IMAGE_FILE, UPLOAD_EDITOR_IMAGE_FILE_FAILURE, UPLOAD_EDITOR_IMAGE_FILE_SUCCESS
} from '../constants/write';

export const retrieveAlbums = createAction<{ albums: string[] }>(RETRIEVE_ALBUMS);
export const submitWrite = createAction(SUBMIT_WRITE);
export const updateAlbum = createAction<{ album: string }>(UPDATE_ALBUM);
export const updateTitle = createAction<{ title: string }>(UPDATE_TITLE);

export const toggleBlockType = createAction<{ blockType: string }>(TOGGLE_BLOCK_TYPE);
export const toggleInlineStyle = createAction<{ inlineStyle: string }>(TOGGLE_INLINE_STYLE);
export const updateEditorState = createAction<{ editorState: EditorState }>(UPDATE_EDITOR_STATE);
export const uploadEditorImageFile = createAction<{ imageFile: File }>(UPLOAD_EDITOR_IMAGE_FILE);
export const uploadEditorImageFileSuccess = createAction<{ imageUrl: string }>(UPLOAD_EDITOR_IMAGE_FILE_SUCCESS);
export const uploadEditorImageFileFailure = createAction(UPLOAD_EDITOR_IMAGE_FILE_FAILURE);

export const startMentionSearch = createAction<{ mentionSearch: string }>(START_MENTION_SEARCH);
export const updateMentionSearch = createAction<{ mentionSearch: string }>(UPDATE_MENTION_SEARCH);
export const stopMentionSearch = createAction<{ mentionSearch: string }>(STOP_MENTION_SEARCH);
