import * as React from 'react';

interface ICommonButtonProps {
    active: boolean;
    className: string;
    onToggle: (type: string) => void;
    style: string;
}

export class CommonButton extends React.Component<ICommonButtonProps> {
    public handleToggle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    }

    public render() {
        return <span style={{ color: this.props.active ? '#f2753f' : '#999', cursor: 'pointer', padding: '0 1rem' }}
            className={this.props.className} onClick={this.handleToggle}></span>;
    }
}
