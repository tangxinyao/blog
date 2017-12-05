import * as React from 'react';

import './cube.less';

export interface ICubeProps {
    front: string;
    back: string;
}

export const CubeView = (props: ICubeProps) => {
    return <div className="cube-container">
        <div className="cube-box">
            <div className="cube cube-front">{props.front}</div>
            <div className="cube cube-back">{props.back}</div>
        </div>
    </div>;
};
