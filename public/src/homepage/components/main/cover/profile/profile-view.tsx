import * as React from 'react';

import { CanvasView } from '../canvas';
import profileImg = require('images/profile.png');

export function ProfileView() {
    return <div className="profile">
        <div className="profile-text">
            <div className="profile-header">HELLO WORLD</div>
            <div className="profile-content">I'M A COMPUTER PROGRAMMER</div>
            <div className="profile-content">LOVING DRAWING AND COOKING</div>
            <div className="profile-content">FROM 2013 TO 2017</div>
            <div className="profile-content">I LEARNT CS IN NUIST</div>
            <div className="profile-content">ALTHOUGH I'M A FRESHMEN</div>
            <div className="profile-content">I'M ALREADY GAINING EXPRIENCE</div>
        </div>
        <div className="profile-img">
            <CanvasView />
            <img style={{ width: '100%' }} src={profileImg} />
        </div>
    </div>;
}
