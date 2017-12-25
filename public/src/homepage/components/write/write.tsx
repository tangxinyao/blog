import { ContentBlock, Editor, EditorState } from 'draft-js';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { updateAlbum, updateEditorState, updateTitle } from '../../actions/write';
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
        album: string;
        albums: string[];
        editorState: EditorState;
        title: string;
    };
    handleTitleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleEditorStateChange: (editorState: EditorState) => void;
    handleAlbumInput: React.ChangeEventHandler<HTMLInputElement>;
}

class WriteView extends React.Component<IWriteProps> {
    public render() {
        const { handleAlbumInput, handleEditorStateChange, handleTitleChange, write } = this.props;
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
                        <input className="article-category-ipt" placeholder="Album" type="text"
                            onChange={handleAlbumInput} value={write.album} />
                        <div>
                            <span className="article-category-label article-category-active">Computer Science</span>
                            <span className="article-category-label">Art</span>
                            <span className="article-category-label">Artifact Intelligence</span>
                        </div>
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

function mapDispatch(dispatch: Dispatch<Action<{ album: string, albums: string[], editor: EditorState, title: string }>>) {
    return {
        handleAlbumInput: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateAlbum({ album: event.target.value }));
        },
        handleEditorStateChange: (editorState: EditorState) => {
            dispatch(updateEditorState({ editorState }));
        },
        handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateTitle({ title: event.target.value }));
        }
    };
}

export const Write = connect(mapState, mapDispatch)(WriteView);
