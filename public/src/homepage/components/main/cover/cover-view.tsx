import * as React from 'react';

import { PreviewView } from './preview';
import { ProfileView } from './profile';

export function CoverView() {
    return <div style={{ width: '100%', minHeight: 'calc(100% - 12rem)' }}>
        <div className="container">
            <ProfileView />
        </div>
    </div>;
}
