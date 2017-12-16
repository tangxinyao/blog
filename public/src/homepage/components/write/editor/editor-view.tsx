import { DraftHandleValue, Editor, EditorState, getDefaultKeyBinding } from 'draft-js';
import * as React from 'react';

interface IEditorState {
    editorState: EditorState;
}

export class EditorView extends React.Component<any, IEditorState> {
    constructor(props: any) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }

    public render() {
        return <Editor
            editorState={this.state.editorState}
            keyBindingFn={this.customKeyBindingFn}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.handleChange}
            placeholder="Please enter the text" />;
    }

    public handleChange = (editorState: EditorState) => {
        this.setState({ editorState });
    }

    private customKeyBindingFn = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 229 || e.keyCode === 50) {
            return 'edit-link';
        }
        return getDefaultKeyBinding(e);
    }

    private handleKeyCommand = (command: string): DraftHandleValue => {
        if (command === 'edit-link') {
            console.log('@');
            return 'handled';
        }
        return 'not-handled';
    }
}
