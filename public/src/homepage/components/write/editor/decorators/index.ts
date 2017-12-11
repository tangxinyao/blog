import { CompositeDecorator } from 'draft-js';
import { handleLinkEntities, Link } from './link';

export const decorator = new CompositeDecorator([
    {
        component: Link,
        strategy: handleLinkEntities
    }
]);
