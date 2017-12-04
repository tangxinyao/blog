import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LoadingView } from '../parts/loading';
import { BackgroundView } from './parts/background';

function PassportView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <BackgroundView />
        <LoadingView />
    </div>;
}

ReactDOM.render(<PassportView />, document.getElementById('root'));
