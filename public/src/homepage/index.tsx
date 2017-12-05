import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ProgressView } from '../components/progress';
import { ArticleView } from './components/article';
import { FooterView } from './components/footer';
import { HeaderView } from './components/header';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

function HomePageView() {
    return (
        <Provider store={store}>
            <div style={{ height: '100%', width: '100%' }}>
                <ProgressView />
                <HeaderView />
                <ArticleView />
                <FooterView />
            </div>
        </Provider>
    );
}

ReactDOM.render(<HomePageView />, document.getElementById('root'));
