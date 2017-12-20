import * as React from 'react';

import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { CoverView } from './cover';
import { Search } from './search';

import graphImage = require('images/graph.png');

export function MainView() {
    return <div style={{ width: '100%', backgroundImage: `url(${graphImage})`}}>
        <HeaderView>
            <Search />
        </HeaderView>
        <CoverView />
        <FooterView />
    </div>;
}
