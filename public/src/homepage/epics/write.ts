import { Action } from 'redux-actions';
import { ActionsObservable } from 'redux-observable';
import * as Rx from 'rxjs';
import { uploadEditorImageFileFailure, uploadEditorImageFileSuccess } from '../actions/write';
import { UPLOAD_EDITOR_IMAGE_FILE } from '../constants/write';

export function uploadEditorImageEpic(action$: ActionsObservable<any>) {
    return action$.ofType(UPLOAD_EDITOR_IMAGE_FILE).mergeMap((action: Action<any>) => {
        const imageFile = action.payload.imageFile;
        return Rx.Observable.ajax.post('/api/image').mergeMap((imageData) => {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('token', imageData.response.uptoken);
            return Rx.Observable.ajax.post('http://upload.qiniu.com', formData).map((keyData) => {
                const imageUrl = 'http://p1iq92kt6.bkt.clouddn.com/' + keyData.response.key;
                return uploadEditorImageFileSuccess({ imageUrl });
            });
        }).catch(() => [uploadEditorImageFileFailure()]);
    });
}
