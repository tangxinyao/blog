import { AtomicBlockUtils, EditorState, RichUtils } from 'draft-js';
import * as Immutable from 'immutable';
import { Action } from 'redux-actions';

import { Album } from '../components/parts/album';
import {
    ADD_ALBUM, REMOVE_ALBUM, RETRIEVE_ALBUMS, RETRIEVE_ALBUMS_FAILURE, RETRIEVE_ALBUMS_SUCCESS, SELECT_ALBUM,
    START_MENTION_SEARCH, STOP_MENTION_SEARCH, TOGGLE_BLOCK_TYPE, TOGGLE_INLINE_STYLE, UPDATE_ALBUM, UPDATE_EDITOR_STATE,
    UPDATE_MENTION_SEARCH, UPDATE_TITLE, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_SUCCESS
} from '../constants/write';

export type IWriterAction = Action<{
    albumContent: string,
    albumId: string,
    albums: string[],
    blockType: string,
    editorState: EditorState,
    imageUrl: string,
    inlineStyle: string,
    mentionSearch: string,
    title: string
}>;

enum WriteStatus {
    Initial,
    RetrieveAlbumsFailure,
    RetrieveAlbumsPending,
    RetrieveAlbumsSuccess,
    UploadImageFailure,
    UploadImagePending,
    UploadImageSuccess,
    SubmitFailure,
    SubmitPending,
    SubmitSuccess
}

// TODO: will add decorator for mention in futhure
const initialState = {
    album: new Album(),
    albums: Immutable.Map<string, Album>(),
    editorState: EditorState.createEmpty(),
    search: '',
    status: WriteStatus.Initial,
    title: ''
};

export function writeReducer(state = initialState, action: IWriterAction) {
    switch (action.type) {
        case ADD_ALBUM:
            const addedAlbum = state.album;
            return Object.assign({}, state, { album: new Album(), albums: state.albums.set(addedAlbum.id, addedAlbum) });

        case REMOVE_ALBUM:
            const removedId = action.payload.albumId;
            return Object.assign({}, state, { albums: state.albums.remove(removedId) });

        case RETRIEVE_ALBUMS:
            return Object.assign({}, state, { status: WriteStatus.RetrieveAlbumsPending });

        case RETRIEVE_ALBUMS_FAILURE:
            return Object.assign({}, state, { status: WriteStatus.RetrieveAlbumsFailure });

        case RETRIEVE_ALBUMS_SUCCESS:
            return Object.assign({}, state, { status: WriteStatus.RetrieveAlbumsSuccess, albums: action.payload.albums });

        case UPDATE_ALBUM:
            const album = state.album.handleChange(action.payload.albumContent);
            return Object.assign({}, state, { album });

        case SELECT_ALBUM:
            const selectedId = action.payload.albumId;
            const selectedAlbum = state.albums.get(selectedId);
            return Object.assign({}, state, { albums: state.albums.set(selectedId, selectedAlbum.handleSelect()) });

        case UPDATE_TITLE:
            return Object.assign({}, state, { title: action.payload.title });

        case TOGGLE_BLOCK_TYPE:
            return Object.assign({}, state, { editorState: RichUtils.toggleBlockType(state.editorState, action.payload.blockType) });

        case TOGGLE_INLINE_STYLE:
            return Object.assign({}, state, { editorState: RichUtils.toggleInlineStyle(state.editorState, action.payload.inlineStyle) });

        case UPLOAD_IMAGE:
            return Object.assign({}, state, { status: WriteStatus.UploadImagePending });

        case UPLOAD_IMAGE_SUCCESS:
            const editorState = state.editorState;
            const content = editorState.getCurrentContent().createEntity('IMAGE', 'IMMUTABLE', { src: action.payload.imageUrl });
            const newEditorState = EditorState.set(editorState, { currentContent: content });
            return Object.assign({}, state, { editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, content.getLastCreatedEntityKey(), ' '), loading: false });

        case UPLOAD_IMAGE_FAILURE:
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
