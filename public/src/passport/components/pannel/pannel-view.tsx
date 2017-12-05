import * as React from 'react';
import { CornerView } from '../corner';
import { Login } from './login-view';

export function PannelView() {
    return <div className="pannel">
        <CornerView>注册</CornerView>
        <Login />
    </div>;
}
