import { EditorState } from 'draft-js';
import { fromJS } from 'immutable';
import { Action } from 'redux-actions';
import { RETRIEVE_ALBUMS, UPDATE_ALBUM, UPDATE_EDITOR, UPDATE_TITLE } from '../constants/write';

const initialState = fromJS({ album: '', albums: [], editor: new EditorState(), title: '' });

export function writeReducer(state = initialState, action: Action<{ album: string, albums: string[], editor: EditorState, title: string }>) {
    switch (action.type) {

        case RETRIEVE_ALBUMS:
            return state.mergeDeep({ albums: action.payload.albums });

        case UPDATE_ALBUM:
            return state.mergeDeep({ album: action.payload.album });

        case UPDATE_EDITOR:
            return state.mergeDeep({ editor: action.payload.editor });

        case UPDATE_TITLE:
            return state.mergeDeep({ title: action.payload.title });

        default:
            return state;
    }
}
