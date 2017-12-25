import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { uploadEditorImageFile } from '../../../../actions/write';

export class ImageButtonView extends React.Component<{ uploadImage: (file: File) => void }> {
    public render() {
        return <span style={{ color: '#999', cursor: 'pointer', display: 'inline-block', padding: '0 1rem' }}
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
        this.props.uploadImage(e.target.files[0]);
    }
}

function mapDispatch(dispatch: Dispatch<any>) {
    return {
        uploadImage: (file: File) => {
            dispatch(uploadEditorImageFile({ imageFile: file }));
        }
    };
}

export const ImageButton = connect(null, mapDispatch)(ImageButtonView);
