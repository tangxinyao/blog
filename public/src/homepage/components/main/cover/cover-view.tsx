import * as React from 'react';

import { CardView } from '../../parts/card';
import { CubeView } from '../../parts/cube';
import { NavView } from './nav';
import { ProfileView } from './profile';

export function CoverView() {
    return <div className="cover">
        <div className="container">
            <ProfileView />
            <NavView />
        </div>
        <div className="small-container">
            <div className="cover-header">Latest Posts</div>
            <CardView />
            <CardView />
            <CardView />
        </div>
        <div>
            <CubeView front="Show All" back="Click Me" />
        </div>
    </div>;
}
