import * as React from 'react';

export function SignupView() {
    return <div>
        <input className="passport-ipt" placeholder="请输入邮箱" type="text" />
        <input className="passport-ipt" placeholder="请设置密码" type="password" />
        <button className="passport-btn">注册</button>
    </div>;
}
