import * as React from 'react';

import logoShadow = require('./images/logo-shadow.png');
import logo = require('./images/logo.png');

import './header.less';

export const HeaderView = () => (
    <header>
        <div className="banner">
            <span className="logo-box">
                <img alt="LOGO" className="logo" src={logo} />
                <img alt="LOGO" className="logo" src={logoShadow} />
            </span>
            <span className="title">Shay</span>
        </div>
        <div className="search-group">
            <input className="search-ipt" type="text" />
            <span className="search-btn fa fa-search"></span>
        </div>
    </header>
);
