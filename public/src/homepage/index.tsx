import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import { MainView } from './components/main';
import { ProgressView } from './components/parts/progress/progress-view';
import { PassportView } from './components/passport';
import { Write } from './components/write';
import { epicMiddleware } from './epics';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

function HomePageView() {
    return (
        <Provider store={store}>
            <Router>
                <div style={{ width: '100%', height: '100%' }}>
                    <ProgressView />
                    <Route exact path="/" component={MainView} />
                    <Route path="/passport" component={PassportView} />
                    <Route path="/write" component={Write} />
                </div>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<HomePageView />, document.getElementById('root'));
