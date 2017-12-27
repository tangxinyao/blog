import { ContentBlock, Editor, EditorState } from 'draft-js';
import * as Immutable from 'immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { addAlbum, removeAlbum, retrieveAlbums, selectAlbum, submitWrite, updateAlbum, updateEditorState, updateTitle } from '../../actions/write';
import { IWriterAction } from '../../reducers/write';
import { Album, AlbumView } from '../parts/album';
import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { Topbar } from './topbar/topbar';
import { ImageBlock } from './utils/block';

function getBlockStyle(block: ContentBlock) {
    switch (block.getType()) {
        case 'blockquote':
            return 'public-DraftStyleDefault-blockquote';
    }
}

const blockRenderer = (editorState: EditorState) => (contentBlock: ContentBlock) => {
    if (contentBlock.getType() !== 'atomic') {
        return null;
    }
    const entity = editorState.getCurrentContent().getEntity(contentBlock.getEntityAt(0));
    if (entity.getType() === 'IMAGE') {
        return {
            component: ImageBlock,
            editable: false
        };
    }
};

interface IWriteProps {
    write: {
        album: Album;
        albums: Immutable.Map<string, Album>;
        editorState: EditorState;
        title: string;
    };
    handleAlbumAdd: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleAlbumInput: React.ChangeEventHandler<HTMLInputElement>;
    handleAlbumRemove: (id: string) => (e: React.MouseEvent<HTMLElement>) => void;
    handleAlbumsRetireve: () => void;
    handleAlbumSelect: (id: string) => () => void;
    handleEditorStateChange: (editorState: EditorState) => void;
    handleSubmit: () => void;
    handleTitleChange: React.ChangeEventHandler<HTMLInputElement>;
}

class WriteView extends React.Component<IWriteProps> {

    public componentDidMount() {
        this.props.handleAlbumsRetireve();
    }

    public render() {
        const { handleAlbumAdd, handleAlbumInput, handleAlbumRemove, handleAlbumSelect,
            handleEditorStateChange, handleSubmit, handleTitleChange, write } = this.props;
        return <div style={{ width: '100%', height: '100%' }}>
            <HeaderView />
            <div style={{ minHeight: 'calc(100% - 8rem)', userSelect: 'none' }}>
                <div className="small-container">
                    <input className="article-title" placeholder="Title" type="text"
                        onChange={handleTitleChange} value={write.title} />
                    <Topbar />
                    <Editor
                        blockStyleFn={getBlockStyle}
                        blockRendererFn={blockRenderer(write.editorState)}
                        editorState={write.editorState}
                        onChange={handleEditorStateChange}
                        placeholder="Please enter the text" />
                    <div className="article-category">
                        <input className="article-category-ipt" placeholder="Album" type="text" onKeyUp={handleAlbumAdd}
                            onChange={handleAlbumInput} value={write.album.content} />
                        <div>
                            {write.albums.toArray().map((album: Album) => <AlbumView key={album.id} album={album} onAlbumRemove={handleAlbumRemove} onAlbumSelect={handleAlbumSelect} />)}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="article-submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <FooterView />
        </div>;
    }
}

function mapState(state: any) {
    return { write: state.write };
}

function mapDispatch(dispatch: Dispatch<Action<IWriterAction>>) {
    return {
        handleAlbumAdd: (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.keyCode === 13) {
                dispatch(addAlbum());
            }
        },
        handleAlbumInput: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateAlbum({ albumContent: event.target.value }));
        },
        handleAlbumRemove: (id: string) => (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            dispatch(removeAlbum({ albumId: id }));
        },
        handleAlbumSelect: (id: string) => () => {
            dispatch(selectAlbum({ albumId: id }));
        },
        handleAlbumsRetireve: () => {
            dispatch(retrieveAlbums());
        },
        handleEditorStateChange: (editorState: EditorState) => {
            dispatch(updateEditorState({ editorState }));
        },
        handleSubmit: () => {
            dispatch(submitWrite());
        },
        handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateTitle({ title: event.target.value }));
        }
    };
}

export const Write = connect(mapState, mapDispatch)(WriteView);
