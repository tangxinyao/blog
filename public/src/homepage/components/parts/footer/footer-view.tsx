import * as React from 'react';

export function FooterView() {
    return <footer>
        <div className="contact">
            <span>Follow me with</span>
            <a href="https://github.com/tangxinyao" target="_blank">
                <span className="fa fa-github"></span>
                <span>tangxinyao</span>
            </a>
            <a href="https://weibo.com/itsweet" target="_blank">
                <span className="fa fa-weibo"></span>
                <span>你喵的我喵的他喵的</span>
            </a>
        </div>
    </footer>;
}
