import { v4 } from 'uuid';

export enum AlbumType { Local, Public }

export class Album {
    public id: string;
    public type: AlbumType;
    public content: string;
    public selected: boolean;
    constructor(content = '', id = v4(), type = AlbumType.Local, selected = false) {
        this.id = id;
        this.type = type;
        this.content = content;
        this.selected = selected;
    }
    public handleChange = (content: string) => {
        return new Album(content, this.id, AlbumType.Local, false);
    }
    public handleSelect = () => {
        return new Album(this.content, this.id, this.type, !this.selected);
    }
}
