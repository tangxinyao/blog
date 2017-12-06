import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ProgressView } from '../parts/progress';
import { BackgroundView } from './background';
import { Login, Signup } from './pannel';

import './passport.less';

export function PassportView() {
    return <div style={{ width: '100%', height: '100%' }}>
        <ProgressView />
        <BackgroundView />
        <Route path="/passport/login" component={Login} />
        <Route path="/passport/signup" component={Signup} />
    </div>;
}
