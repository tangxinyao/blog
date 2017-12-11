import { CompositeDecorator, ContentBlock, ContentState } from 'draft-js';
import * as React from 'react';

export function handleLinkEntities(block: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
    block.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    }, callback);
}

export function Link(props: { contentState: ContentState, entityKey: string }) {
    const { href, text } = props.contentState.getEntity(props.entityKey).getData();
    return <a href={href} style={{ color: '#3b5998', textDecoration: 'underline' }}>{text}</a>;
}
