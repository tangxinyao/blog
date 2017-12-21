import { EditorState } from 'draft-js';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { startMentionSearch, stopMentionSearch, updateMentionSearch } from '../../../../actions/write';
import { mentionStore } from '../store';

class MentionPortalView extends React.Component<any, any> {
    private dom: HTMLSpanElement;

    public componentDidMount() {
        const offsetKey = this.props.offsetKey;
        mentionStore.searches = mentionStore.searches.set(offsetKey, offsetKey);
        mentionStore.opened = true;
        this.updatePortalClientRect(this.props);
        this.props.handleMentionSearchStart(this.props.decoratedText);
    }

    // public componentWillReceiveProps(nextProps: any) {
    //     this.updatePortalClientRect(nextProps);
    //     this.props.handleMentionSearchChange(nextProps.decoratedText);
    // }

    public componentWillUnmount() {
        mentionStore.searches = mentionStore.searches.delete(this.props.offsetKey);
        mentionStore.clientRectFunctions = mentionStore.clientRectFunctions.delete(this.props.offsetKey);
        mentionStore.opened = false;
        this.props.handleMentionSearchStop(this.props.decoratedText);
    }

    public render() {
        return <span ref={this.ref}>{this.props.children}</span>;
    }

    private ref: React.Ref<HTMLSpanElement> = (dom) => {
        this.dom = dom;
    }

    private updatePortalClientRect(props: any) {
        mentionStore.clientRectFunctions = mentionStore.clientRectFunctions.set(props.offsetKey, () => this.dom.getBoundingClientRect());
    }

}

function mapState(state: any) {
    // TODO will render state.write.mentionSearch to another component, and we should remove this
    console.log(state.write.mentionSearch);
}

function mapDispatch(dispatch: Dispatch<Action<{ album: string, albums: string[], editorState: EditorState, search: string, title: string }>>) {
    return {
        handleMentionSearchChange: (decoratedText: string) => {
            dispatch(updateMentionSearch({ mentionSearch: decoratedText }));
        },
        handleMentionSearchStart: (decoratedText: string) => {
            dispatch(startMentionSearch({ mentionSearch: decoratedText }));
        },
        handleMentionSearchStop: (decoratedText: string) => {
            dispatch(stopMentionSearch({ mentionSearch: decoratedText }));
        }
    };
}

export const MentionPortal = connect(mapState, mapDispatch)(MentionPortalView);
