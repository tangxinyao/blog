import { CompositeDecorator } from 'draft-js';

import { handleMentions, MentionView } from './mention';
import { handleMentionPortal, MentionPortal } from './portal';

export const decorator = new CompositeDecorator([
    {
        component: MentionPortal,
        strategy: handleMentionPortal
    },
    {
        component: MentionView,
        strategy: handleMentions
    }
]);
