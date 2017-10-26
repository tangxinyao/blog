import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DashboardView } from './dashboard';

class App extends React.Component {
    public render() {
        return (
            <DashboardView />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
