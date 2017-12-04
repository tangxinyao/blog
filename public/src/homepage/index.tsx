import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { LoadingView } from '../parts/loading';
import { ArticleView } from './parts/article';
import { FooterView } from './parts/footer';
import { HeaderView } from './parts/header';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

function HomePageView() {
    return (
        <Provider store={store}>
            <div style={{ height: '100%', width: '100%' }}>
                <LoadingView />
                <HeaderView />
                <ArticleView />
                <FooterView />
            </div>
        </Provider>
    );
}

ReactDOM.render(<HomePageView />, document.getElementById('root'));
