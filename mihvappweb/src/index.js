import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import App from './containers/App';

const routes = (
    <BrowserRouter>
        <Route path="/" component={App}></Route>
    </BrowserRouter>    
);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
