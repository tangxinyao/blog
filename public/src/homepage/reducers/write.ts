import { EditorState, RichUtils } from 'draft-js';
import { Action } from 'redux-actions';

import { decorator } from '../components/write/utils';
import { RETRIEVE_ALBUMS, START_MENTION_SEARCH, STOP_MENTION_SEARCH, TOGGLE_BLOCK_TYPE, TOGGLE_INLINE_STYLE, UPDATE_ALBUM, UPDATE_EDITOR_STATE, UPDATE_MENTION_SEARCH, UPDATE_TITLE } from '../constants/write';

const initialState = { album: '', albums: ([] as string[]), editorState: EditorState.createEmpty(decorator), search: '', title: '' };

export function writeReducer(state = initialState, action: Action<{ album: string, albums: string[], blockType: string, editorState: EditorState, inlineStyle: string, mentionSearch: string, title: string }>) {
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
