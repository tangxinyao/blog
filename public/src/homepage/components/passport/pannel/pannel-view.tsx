import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { transportLogin, updatePassword, updateUsername } from '../../../actions/login';

interface IPannelProps {
    login: {
        username: string,
        password: string
    };
    onChange: React.ChangeEventHandler<any>;
    onConfirm: React.MouseEventHandler<HTMLButtonElement>;
}

function PannelView(props: IPannelProps) {
    const now = new Date().getHours();
    let slogin;
    if (now > 6 && now <= 12) {
        slogin = 'Good morning';
    } else if (now > 12 && now <= 18) {
        slogin = 'Good afternoon';
    } else {
        slogin = 'Good night';
    }
    return <div className="passport-pannel" onChange={props.onChange}>
        <div className="passport-header">
            <span>{slogin}</span>
            <span className="passport-left-coner"></span>
            <span className="passport-right-corner"></span>
        </div>
        <input className="passport-ipt" name="username" type="text" value={props.login.username} />
        <input className="passport-ipt" name="password" type="password" value={props.login.password} />
        <button className="passport-btn" onClick={props.onConfirm}>Log in</button>
    </div>;
}

function mapState(state: any) {
    return { login: state.login };
}

function mapDispatch(dispatch: Dispatch<Action<{ username: string, password: string }>>) {
    return {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            switch (event.target.name) {
                case 'username':
                    dispatch(updatePassword({ password: event.target.value }));
                    break;
                case 'password':
                    dispatch(updateUsername({ username: event.target.value }));
            }
        },
        onConfirm: () => {
            console.log('yes');
            dispatch(transportLogin());
        }
    };
}

export const Pannel = connect(mapState, mapDispatch)(PannelView);
