import * as React from 'react';
import { Link } from 'react-router-dom';

import { Search } from '../../main/search';

import logoShadow = require('images/logo-shadow.png');
import logo = require('images/logo.png');

export function HeaderView(props: { children?: React.ReactNode }) {
    return <header>
        <div className="banner">
            <Link to="/">
                <span className="logo-box">
                    <img alt="LOGO" className="logo" src={logo} />
                    <img alt="LOGO" className="logo" src={logoShadow} />
                </span>
                <span className="title">Shay</span>
            </Link>
        </div>
        {props.children}
    </header>;
}
