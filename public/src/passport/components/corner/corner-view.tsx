import * as React from 'react';

interface ICornerProps {
    children?: React.ReactNode;
}

export function CornerView(props: ICornerProps) {
    return <span className="corner">{props.children}</span>;
}
