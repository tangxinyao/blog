import * as React from 'react';

import logoShadow = require('images/logo-shadow.png');
import logo = require('images/logo.png');

import { Search } from '../../main/search';

export function HeaderView() {
    return <header>
        <div className="banner">
            <span className="logo-box">
                <img alt="LOGO" className="logo" src={logo} />
                <img alt="LOGO" className="logo" src={logoShadow} />
            </span>
            <span className="title">Shay</span>
        </div>
        <Search />
    </header>;
}
