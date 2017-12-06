import * as React from 'react';

import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { ProgressView } from '../parts/progress';
import { ArticleView } from './article';

export function MainView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <ProgressView />
        <HeaderView />
        <ArticleView />
        <FooterView />
    </div>;
}
