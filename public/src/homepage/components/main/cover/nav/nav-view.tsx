import * as React from 'react';
import { Link } from 'react-router-dom';

import catProfile = require('images/cat-profile.png');
import catStomach = require('images/cat-stomach.png');

import catBack = require('images/cat-back.png');
import catBody = require('images/cat-body.png');

import catTail = require('images/cat-tail.png');
import catSmile = require('images/cat-smile.png');

export class NavView extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { active: -1 };
    }

    public handleMouseOver = (index: number) => () => {
        this.setState({ active: index });
    }

    public handleMouseOut = (index: number) => () => {
        this.setState({ active: -1 });
    }

    public render() {
        return <div className="nav">
            <Link className="nav-link" to="/passport">
                <img className="nav-img nav-img-front" src={catProfile} alt="" />
                <img className="nav-img nav-img-back" src={catStomach} alt="" />
                <span className="nav-text">Album</span>
            </Link>
            <Link className="nav-link" to="/passport">
                <img className="nav-img nav-img-front" src={catBack} alt="" />
                <img className="nav-img nav-img-back" src={catBody} alt="" />
                <span className="nav-text">Note</span>
            </Link>
            <Link className="nav-link" to="/passport">
                <img className="nav-img nav-img-front" src={catTail} alt="" />
                <img className="nav-img nav-img-back" src={catSmile} alt="" />
                <span className="nav-text">Diary</span>
            </Link>
        </div>;
    }
}
