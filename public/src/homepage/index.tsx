import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';

import { MainView } from './components/main';
import { PassportView } from './components/passport';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

function HomePageView() {
    return (
        <Provider store={store}>
            <Router>
                <div style={{ width: '100%', height: '100%' }}>
                    <Route exact path="/" component={MainView} />
                    <Route path="/passport" component={PassportView} />
                </div>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<HomePageView />, document.getElementById('root'));
