import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePageView } from './homepage';

class App extends React.Component {
    public render() {
        return (
            <HomePageView />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
