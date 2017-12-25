import { AtomicBlockUtils, EditorState, RichUtils } from 'draft-js';
import { Action } from 'redux-actions';

import {
    RETRIEVE_ALBUMS, START_MENTION_SEARCH, STOP_MENTION_SEARCH, TOGGLE_BLOCK_TYPE, TOGGLE_INLINE_STYLE, UPDATE_ALBUM, UPDATE_EDITOR_STATE,
    UPDATE_MENTION_SEARCH, UPDATE_TITLE, UPLOAD_EDITOR_IMAGE_FILE, UPLOAD_EDITOR_IMAGE_FILE_FAILURE, UPLOAD_EDITOR_IMAGE_FILE_SUCCESS
} from '../constants/write';

// TODO: will add decorator for mention in futhur
const initialState = { album: '', albums: ([] as string[]), editorState: EditorState.createEmpty(), loading: false, search: '', title: '' };

export function writeReducer(state = initialState, action: Action<{ album: string, albums: string[], blockType: string, editorState: EditorState, imageUrl: string, inlineStyle: string, mentionSearch: string, title: string }>) {
    switch (action.type) {

        case RETRIEVE_ALBUMS:
            return Object.assign({}, state, { albums: action.payload.albums });

        case UPDATE_ALBUM:
            return Object.assign({}, state, { album: action.payload.album });

        case UPDATE_TITLE:
            return Object.assign({}, state, { title: action.payload.title });

        case TOGGLE_BLOCK_TYPE:
            return Object.assign({}, state, { editorState: RichUtils.toggleBlockType(state.editorState, action.payload.blockType) });

        case TOGGLE_INLINE_STYLE:
            return Object.assign({}, state, { editorState: RichUtils.toggleInlineStyle(state.editorState, action.payload.inlineStyle) });

        case UPLOAD_EDITOR_IMAGE_FILE:
            return Object.assign({}, state, { loading: true });

        case UPLOAD_EDITOR_IMAGE_FILE_SUCCESS:
            const editorState = state.editorState;
            const content = editorState.getCurrentContent().createEntity('IMAGE', 'IMMUTABLE', { src: action.payload.imageUrl });
            const newEditorState = EditorState.set(editorState, { currentContent: content });
            return Object.assign({}, state, { editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, content.getLastCreatedEntityKey(), ' '), loading: false });

        case UPLOAD_EDITOR_IMAGE_FILE_FAILURE:
            return Object.assign({}, state, { loading: false });

        case UPDATE_EDITOR_STATE:
            return Object.assign({}, state, { editorState: action.payload.editorState });

        case START_MENTION_SEARCH:
            return Object.assign({}, state, { mentionSearch: action.payload.mentionSearch });

        case UPDATE_MENTION_SEARCH:
            return Object.assign({}, state, { mentionSearch: action.payload.mentionSearch });

        case STOP_MENTION_SEARCH:
            return Object.assign({}, state, { mentionSearch: action.payload.mentionSearch });

        default:
            return state;
    }
}
