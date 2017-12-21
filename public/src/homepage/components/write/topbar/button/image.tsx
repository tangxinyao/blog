import * as React from 'react';

export class ImageButton extends React.Component {
    public render() {
        return <span style={{ color: '#999', cursor: 'pointer', display: 'inline-block', padding: '0 0.5rem' }}
            className="fa fa-file-image-o" onClick={this.handleClick}></span>;
    }

    private handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const input = document.createElement('input');
        input.onchange = this.handelChange;
        input.type = 'file';
        input.click();
    }

    private handelChange = (e: any) => {
        const file = e.target.files[0];
        console.log(file);
    }
}
