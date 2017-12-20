import { ContentBlock } from 'draft-js';

export function handleMentionPortal(contentBlock: ContentBlock, callback: (start: number, end: number) => void) {
    const text = contentBlock.getText();
    const regex = /(\s|^)\@[\w]+/g;
    const matchArr = regex.exec(text);
    if (matchArr !== null) {
        const start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
