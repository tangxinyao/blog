import { AtomicBlockUtils, ContentBlock, DraftHandleValue, Editor, EditorState, getDefaultKeyBinding } from 'draft-js';
import * as React from 'react';
import { LinkBlock } from './block/link';
import { decorator } from './decorators';

interface IEditorState {
    editorState: EditorState;
}

export class EditorView extends React.Component<any, IEditorState> {
    constructor(props: any) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(decorator) };
    }

    public render() {
        return <Editor
            blockRendererFn={this.customBlockRenderer}
            editorState={this.state.editorState}
            keyBindingFn={this.customKeyBindingFn}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.handleChange} />;
    }

    public handleChange = (editorState: EditorState) => {
        this.setState({ editorState });
    }

    public handleRemove = () => {
        // TODO
    }

    private customKeyBindingFn = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 229 || e.keyCode === 50) {
            return 'edit-link';
        }
        return getDefaultKeyBinding(e);
    }

    private handleKeyCommand = (command: string): DraftHandleValue => {
        if (command === 'edit-link') {
            const content = this.state.editorState.getCurrentContent();
            const contentWithEntity = content.createEntity('LINK_BLOCK', 'MUTABLE', { content: 'at somebody' });
            const entityKey = contentWithEntity.getLastCreatedEntityKey();
            const newEditorState = EditorState.set(this.state.editorState, { currentContent: contentWithEntity });
            this.handleChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
            return 'handled';
        }
        return 'not-handled';
    }

    private customBlockRenderer = (block: ContentBlock) => {
        if (block.getType() !== 'atomic') {
            return null;
        }
        if (!block.getEntityAt(0)) {
            return null;
        }
        const contentState = this.state.editorState.getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));
        switch (entity.getType()) {
            case 'LINK_BLOCK':
                return {
                    component: LinkBlock,
                    editable: false,
                    props: {
                        editorState: this.state.editorState,
                        handleChange: this.handleChange,
                        handleRemove: this.handleRemove
                    }
                };
        }
    }
}
