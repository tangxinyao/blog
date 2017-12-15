import * as React from 'react';

import { CardView } from '../../parts/card';
import { NavView } from './nav';
import { ProfileView } from './profile';

export function CoverView() {
    return <div style={{ width: '100%', minHeight: 'calc(100% - 8rem)', userSelect: 'none' }}>
        <div className="container">
            <ProfileView />
            <NavView />
            <div>
                <CardView />
                <CardView />
                <CardView />
            </div>
        </div>
    </div>;
}
