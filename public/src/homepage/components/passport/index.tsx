import * as React from 'react';

import { HeaderView } from '../parts/header';
import { Pannel } from './pannel';

import graphImage = require('images/graph.png');

export function PassportView() {
    return <div style={{ width: '100%', height: '100%', backgroundImage: `url(${graphImage})` }}>
        <HeaderView />
        <Pannel />
    </div>;
}
