import { ContentBlock, ContentState, EditorState, Modifier } from 'draft-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ILinkBlockProps {
    block: ContentBlock;
    contentState: ContentState;
    blockProps: { editorState: EditorState, handleChange: (editorState: EditorState) => void };
}

interface ILinkBlockState {
    editMode: boolean;
    textValue: string;
    relatedUsers: Array<{}>;
}

export class LinkBlock extends React.Component<ILinkBlockProps, ILinkBlockState> {
    constructor(props: ILinkBlockProps) {
        super(props);
        this.state = { editMode: false, relatedUsers: ['a', 'b', 'c'], textValue: ' ' };
    }

    public render() {
        return <div className="editor-link-active">
            <input type="text" value={this.state.textValue || this.getValue()} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
            {/* {
                this.state.editMode && (this.state.relatedUsers.length > 0) && <ul>
                    {this.state.relatedUsers.map((relatedUser, index) => <li key={index}>{relatedUser}</li>)}
                </ul>
            } */}
        </div>;
    }

    private getValue = () => {
        return this.props.contentState
            .getEntity(this.props.block.getEntityAt(0))
            .getData().content;
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        this.setState({ editMode: true, textValue: e.target.value });
    }

    private handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13) {
            this.saveAndExit();
        }
    }

    private saveAndExit = () => {
        console.log('save and exit');
        const { block, blockProps, contentState } = this.props;
        const { handleChange, editorState } = blockProps;
        const contentWithoutLinkBlock = Modifier.applyEntity(contentState, editorState.getSelection(), null);
        const contentWithEntity = contentWithoutLinkBlock.createEntity('LINK', 'IMMUTABLE', { href: this.state.textValue, text: this.state.textValue });
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        const newContentState = EditorState.set(editorState, { currentContent: contentWithEntity });
        handleChange(newContentState);
    }
}
