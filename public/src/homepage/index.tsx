import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ArticleView } from './article';
import { FooterView } from './footer';
import { HeaderView } from './header';
import { rootReducer } from './reducer';

const store = createStore(rootReducer);

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <div style={{ height: '100%', width: '100%' }}>
                    <div className="loading"></div>
                    <HeaderView />
                    <ArticleView />
                    <FooterView />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
