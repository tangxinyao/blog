import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

import { transportLogin, updatePassword, updateUsername } from '../../../actions/login';
import { CornerView } from '../corner';

interface ILoginProps {
    login: {
        username: string,
        password: string
    };
    onConfirmClick: React.MouseEventHandler<HTMLButtonElement>;
    onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
    onUsernameChange: React.ChangeEventHandler<HTMLInputElement>;
}

function LoginView(props: ILoginProps) {
    return <div className="pannel">
        <Link to="/passport/signup"><CornerView>注册</CornerView></Link>
        <input className="passport-ipt" placeholder="请输入邮箱" type="text" value={props.login.username} onChange={props.onUsernameChange} />
        <input className="passport-ipt" placeholder="请输入密码" type="password" value={props.login.password} onChange={props.onPasswordChange} />
        <button className="passport-btn" onClick={props.onConfirmClick}>登陆</button>
    </div>;
}

function mapState(state: any) {
    return { login: state.login };
}

function mapDispatch(dispatch: Dispatch<Action<{ username: string, password: string }>>) {
    return {
        onConfirmClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(transportLogin());
        },
        onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updatePassword({ password: event.target.value }));
        },
        onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateUsername({ username: event.target.value }));
        }
    };
}

export const Login = connect(mapState, mapDispatch)(LoginView);
