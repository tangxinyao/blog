import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ProgressView } from '../components/progress';
import { BackgroundView } from './components/background';
import { PannelView } from './components/pannel';
import { rootReducer } from './reducers/index';

const store = createStore(rootReducer);

function PassportView() {
    return <Provider store={store}>
        <div style={{ width: '100%', height: '100%' }}>
            <BackgroundView />
            <ProgressView />
            <PannelView />
        </div>
    </Provider>;
}

ReactDOM.render(<PassportView />, document.getElementById('root'));
