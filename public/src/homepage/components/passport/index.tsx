import * as React from 'react';

import { HeaderView } from '../parts/header';
import { Pannel } from './pannel';

export function PassportView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <HeaderView />
        <Pannel />
    </div>;
}
