import * as React from 'react';
import { Link } from 'react-router-dom';

export function CardView() {
    return <div className="card">
        {/* <div className="card-aside" style={{ backgroundImage: 'url(https://unsplash.it/500/400?random)' }}>
        </div> */}
        <Link to="/"><h1 className="card-h1">Stop All The Clocks</h1></Link>
        <div className="card-time">December 18th , 2017</div>
        <div>有时会陷入无话可说的难堪境地。张了张嘴，却像水里的鱼，什么都讲不出口。亦或者，明明又数不清的理由，但话到嘴边，唯有最无力的一句，对不起。真的是对不起。</div>
        <Link to="/"><button className="card-btn">Read more</button></Link>
        <div style={{ fontWeight: 'bold' }}><span>File under </span><Link className="card-link" to="/">Diary</Link><Link className="card-link" to="/">Love Story</Link></div>
    </div>;
}
