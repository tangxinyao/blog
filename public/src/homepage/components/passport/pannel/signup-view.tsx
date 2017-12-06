import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CornerView } from '../corner';

function SignupView() {
    return <div className="pannel">
        <Link to="/passport/login"><CornerView>登陆</CornerView></Link>
        <input className="passport-ipt" placeholder="请输入邮箱" type="text" />
        <input className="passport-ipt" placeholder="请设置密码" type="password" />
        <button className="passport-btn">注册</button>
    </div>;
}

export const Signup = connect()(SignupView);
