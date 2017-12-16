import * as React from 'react';

import { FooterView } from '../parts/footer';
import { HeaderView } from '../parts/header';
import { CategoryView } from './category';
import { EditorView } from './editor';
import { TitleView } from './title';

export class WriteView extends React.Component {
    public render() {
        return <div style={{ width: '100%', height: '100%' }}>
            <HeaderView />
            <div style={{ width: '100%', minHeight: 'calc(100% - 8rem)', userSelect: 'none' }}>
                <div className="container-sm">
                    <TitleView />
                    <EditorView />
                    <CategoryView />
                </div>
            </div>
            <FooterView />
        </div>;
    }
}
