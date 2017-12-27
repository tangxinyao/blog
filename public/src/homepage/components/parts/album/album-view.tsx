import * as React from 'react';
import { Album, AlbumType } from './album';

interface IAlbumViewProps {
    album: Album;
    onAlbumSelect: (id: string) => () => void;
    onAlbumRemove: (id: string) => (e: React.MouseEvent<HTMLElement>) => void;
}

export const AlbumView = (props: IAlbumViewProps) => {
    const { album, onAlbumSelect, onAlbumRemove } = props;
    return <span key={album.id} className={album.selected ? 'album album-active' : 'album'} onClick={onAlbumSelect(album.id)}>
        <span>{album.content}</span>
        {album.type === AlbumType.Local && <span className="fa fa-times-circle-o album-remove" onClick={onAlbumRemove(album.id)}></span>}
    </span>;
};
