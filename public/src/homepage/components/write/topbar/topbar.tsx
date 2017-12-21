import { EditorState } from 'draft-js';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { toggleBlockType, toggleInlineStyle } from '../../../actions/write';
import { CommonButton } from './button/common';

const INLINE_STYLES = [
    { className: 'fa fa-bold', style: 'BOLD' },
    { className: 'fa fa-italic', style: 'ITALIC' },
    { className: 'fa fa-underline', style: 'UNDERLINE' }
];

const BLOCK_TYPES = [
    { className: 'fa fa-list-ol', style: 'ordered-list-item' },
    { className: 'fa fa-list-ul', style: 'unordered-list-item' },
    { className: 'fa fa-quote-right', style: 'blockquote' }
];

interface ITopbarProps {
    editorState: EditorState;
    toggleBlockType: (blockType: string) => void;
    toggleInlineStyle: (inlineStyle: string) => void;
}

function TopbarView(props: ITopbarProps) {
    const editorState = props.editorState;
    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return <div style={{ margin: '0.5rem' }}>
        {
            INLINE_STYLES.map((inlineStyle, index) => <CommonButton key={index} className={inlineStyle.className}
                active={currentStyle.has(inlineStyle.style)} style={inlineStyle.style} onToggle={props.toggleInlineStyle} />)
        }
        {
            BLOCK_TYPES.map((blockType, index) => <CommonButton key={index} className={blockType.className}
                active={blockType.style === currentBlockType} style={blockType.style} onToggle={props.toggleBlockType} />)
        }
    </div>;
}

function mapState(state: any) {
    return { editorState: state.write.editorState };
}

function mapDispatch(dispatch: Dispatch<Action<{ album: string, albums: string[], blockType: string, editorState: EditorState, inlineStyle: string, mentionSearch: string, title: string }>>) {
    return {
        toggleBlockType: (blockType: string) => {
            console.log(toggleBlockType({ blockType }));
            dispatch(toggleBlockType({ blockType }));
        },
        toggleInlineStyle: (inlineStyle: string) => {
            console.log(toggleInlineStyle({ inlineStyle }));
            dispatch(toggleInlineStyle({ inlineStyle }));
        }
    };
}

export const Topbar = connect(mapState, mapDispatch)(TopbarView);
