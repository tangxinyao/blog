import * as Rx from 'rxjs';

function appendToken(headers?: object) {
    const token = localStorage.getItem('token');
    if (token) {
        headers = Object.assign({}, { Authorization: 'Bearer ' + token }, headers);
    }
    return headers;
}

export function ajaxGet(url: string, headers?: object) {
    return Rx.Observable.ajax.get(url, appendToken(headers));
}

export function ajaxPost(url: string, body?: any, headers?: object) {
    return Rx.Observable.ajax.post(url, body, appendToken(headers));
}

export function ajaxPut(url: string, body?: any, headers?: object) {
    return Rx.Observable.ajax.put(url, body, appendToken(headers));
}

export function ajaxDelete(url: string, headers?: object) {
    return Rx.Observable.ajax.delete(url, appendToken(headers));
}
