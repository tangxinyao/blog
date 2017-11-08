import * as React from 'react';

import { ArticleView } from './article-view';
import { FooterView } from './footer-view';
import { HeaderView } from './header-view';

export const HomePageView = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <div className="loading"></div>
            <HeaderView />
            <ArticleView />
            <FooterView />
        </div>
    );
};
