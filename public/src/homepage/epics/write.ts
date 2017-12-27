import * as Immutable from 'immutable';
import { Action } from 'redux-actions';
import { ActionsObservable } from 'redux-observable';
import * as Rx from 'rxjs';

import { ajaxPost } from '../../utils/ajax';
import { retrieveAlbumsSuccess, uploadImageFailure, uploadImageSuccess } from '../actions/write';
import { Album, AlbumType } from '../components/parts/album';
import { RETRIEVE_ALBUMS, UPLOAD_IMAGE } from '../constants/write';

export function uploadImageEpic(action$: ActionsObservable<any>) {
    return action$.ofType(UPLOAD_IMAGE).mergeMap((action: Action<any>) => {
        const image = action.payload.image;
        return ajaxPost('/api/image').mergeMap((imageData) => {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('token', imageData.response.uptoken);
            return Rx.Observable.ajax.post('http://upload.qiniu.com', formData).map((keyData) => {
                const imageUrl = 'http://p1iq92kt6.bkt.clouddn.com/' + keyData.response.key;
                return uploadImageSuccess({ imageUrl });
            });
        }).catch(() => [uploadImageFailure()]);
    });
}

export function retrieveAlbumsEpic(action$: ActionsObservable<any>) {
    return action$.ofType(RETRIEVE_ALBUMS).mergeMap(() => {
        const a1 = new Album('Computer Science', '1', AlbumType.Public);
        const a2 = new Album('Art', '2', AlbumType.Public);
        const a3 = new Album('Artifact Intelligence', '3', AlbumType.Public);
        const albums = Immutable.Map<string, Album>([a1, a2, a3].map((album) => [album.id, album]));
        return [retrieveAlbumsSuccess({ albums })];
    });
}
