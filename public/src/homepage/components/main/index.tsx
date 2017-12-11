import * as React from 'react';

import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { ArticleView } from './article';
import { Search } from './search';

export function MainView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <HeaderView>
            <Search />
        </HeaderView>
        <ArticleView />
        <FooterView />
    </div>;
}
