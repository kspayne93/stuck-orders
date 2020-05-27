import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StuckOrdersDetails from './views/StuckOrdersDetails/StuckOrdersDetails';
import ZendeskDashboard from './views/ZendeskDashboard/ZendeskDashboard';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Switch>
            <Route exact path='/' component={App} />
            <Route path='/details' component={StuckOrdersDetails} />
            <Route path='/zendesk' component={ZendeskDashboard} />
            <Route component={App} />
         </Switch>
      </Router>
   </React.StrictMode>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
