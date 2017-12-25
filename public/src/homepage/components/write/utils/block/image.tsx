import { ContentBlock, ContentState } from 'draft-js';
import * as React from 'react';

export function ImageBlock(props: { block: ContentBlock, contentState: ContentState, blockProps: any }) {
    const { block, contentState } = props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    return <img className="editor-image" src={entity.getData().src} />;
}
