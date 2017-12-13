import * as React from 'react';

import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { Search } from './search';

import { CoverView } from './cover';

export function MainView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <HeaderView>
            <Search />
        </HeaderView>
        <CoverView />
        <FooterView />
    </div>;
}
