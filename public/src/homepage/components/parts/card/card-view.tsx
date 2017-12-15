import * as React from 'react';

export function CardView() {
    return <div className="card">
        <div className="card-aside" style={{ backgroundImage: 'url(https://unsplash.it/500/400?random)' }}>
        </div>
        <div className="card-content">
            <h1 className="card-h1">Stop All The Clocks</h1>
            <div>一个人乐得清静，二个人却也不错。走在路上也许经常想到彼此，也许想到彼此仅此而已。</div>
        </div>
        <div className="card-appendix">
            <a className="card-appendix-row" href="https://service.weibo.com/share/share.php?url=https%3A%2F%2Fshaytang.party&title=Just%20an%20interesting%20blog" target="_blank">
                <span className="fa fa-share-square"></span>
                <span>BE SHARED BY 2</span>
            </a>
            <a className="card-appendix-row">
                <span className="fa fa-heart"></span>
                <span>BE LIKED BY 1</span>
            </a>
        </div>
    </div>;
}
